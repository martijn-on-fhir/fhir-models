/**
 * Demo showing the usage of optimized FHIR serialization
 * Run with: npx ts-node examples/serialization-demo.ts
 */

import { 
  optimizedStringify, 
  createFHIRSerializer,
  defaultFHIRSerializer 
} from '../src/index';

// Create a sample FHIR Bundle with multiple Patient resources
function createSampleBundle(size: number = 1000): any {
  const entries = [];
  
  for (let i = 0; i < size; i++) {
    entries.push({
      fullUrl: `Patient/${i}`,
      resource: {
        resourceType: 'Patient',
        id: `patient-${i}`,
        active: true,
        name: [{
          use: 'official',
          family: `TestFamily${i}`,
          given: [`TestGiven${i}`]
        }],
        gender: i % 2 === 0 ? 'male' : 'female',
        birthDate: `19${50 + (i % 50)}-01-01`,
        telecom: [{
          system: 'email',
          value: `patient${i}@example.com`
        }],
        // Add some null values that can be optimized away
        deceasedBoolean: null,
        multipleBirthInteger: null,
        photo: [] // Empty array that can be removed
      }
    });
  }

  return {
    resourceType: 'Bundle',
    id: 'demo-bundle',
    type: 'collection',
    timestamp: new Date().toISOString(),
    total: size,
    entry: entries
  };
}

async function demonstrateBasicUsage() {
  console.log('🚀 Basic Usage Demo');
  console.log('='.repeat(50));
  
  const samplePatient = {
    resourceType: 'Patient',
    id: 'demo-patient',
    active: true,
    name: [{
      use: 'official',
      family: 'Demo',
      given: ['Patient']
    }],
    gender: 'male',
    // These null values will be removed with optimization
    deceasedBoolean: null,
    multipleBirthInteger: null
  };

  // Standard serialization
  const standard = JSON.stringify(samplePatient);
  console.log('Standard JSON.stringify:');
  console.log(`Size: ${Buffer.byteLength(standard)} bytes`);
  console.log(standard);
  console.log();

  // Optimized serialization
  const optimized = optimizedStringify.resource(samplePatient);
  console.log('Optimized serialization:');
  console.log(`Size: ${Buffer.byteLength(optimized as string)} bytes`);
  console.log(optimized);
  console.log();

  const reduction = ((Buffer.byteLength(standard) - Buffer.byteLength(optimized as string)) / Buffer.byteLength(standard) * 100);
  console.log(`💡 Size reduction: ${reduction.toFixed(1)}%\n`);
}

async function demonstrateBundleOptimization() {
  console.log('📦 Bundle Optimization Demo');
  console.log('='.repeat(50));
  
  const bundle = createSampleBundle(100);
  
  console.log('Comparing serialization methods for 100-resource bundle...');
  
  // Standard JSON.stringify
  console.time('Standard JSON.stringify');
  const standardResult = JSON.stringify(bundle);
  console.timeEnd('Standard JSON.stringify');
  console.log(`Standard size: ${(Buffer.byteLength(standardResult) / 1024).toFixed(2)} KB`);
  
  // Optimized serialization
  console.time('Optimized serialization');
  const optimizedResult = optimizedStringify.bundle(bundle);
  console.timeEnd('Optimized serialization');
  console.log(`Optimized size: ${(Buffer.byteLength(optimizedResult as string) / 1024).toFixed(2)} KB`);
  
  const sizeReduction = ((Buffer.byteLength(standardResult) - Buffer.byteLength(optimizedResult as string)) / Buffer.byteLength(standardResult) * 100);
  console.log(`💡 Size reduction: ${sizeReduction.toFixed(1)}%\n`);
}

async function demonstrateStreamingSerialization() {
  console.log('🌊 Streaming Serialization Demo');
  console.log('='.repeat(50));
  
  const largeBundle = createSampleBundle(5000);
  console.log(`Created bundle with ${largeBundle.total} resources`);
  
  // Create streaming serializer
  const stream = optimizedStringify.bundleStream(largeBundle);
  
  let totalSize = 0;
  let chunkCount = 0;
  
  console.log('Streaming serialization...');
  console.time('Streaming complete');
  
  return new Promise<void>((resolve, reject) => {
    stream.on('data', (chunk) => {
      totalSize += chunk.length;
      chunkCount++;
      
      // Show progress every 100 chunks
      if (chunkCount % 100 === 0) {
        process.stdout.write(`\rProcessed ${chunkCount} chunks, ${(totalSize / 1024).toFixed(2)} KB`);
      }
    });
    
    stream.on('end', () => {
      console.timeEnd('Streaming complete');
      console.log(`\n✅ Streaming complete: ${chunkCount} chunks, ${(totalSize / 1024 / 1024).toFixed(2)} MB total`);
      console.log();
      resolve();
    });
    
    stream.on('error', reject);
  });
}

async function demonstrateCustomOptions() {
  console.log('⚙️ Custom Configuration Demo');
  console.log('='.repeat(50));
  
  const sampleData = {
    resourceType: 'Patient',
    active: true,
    name: [{ family: 'Test' }],
    // Data that can be optimized
    deceasedBoolean: null,
    photo: [],
    extension: [{
      url: 'http://example.org/test',
      valueString: 'test'
    }]
  };

  // Conservative serialization (preserve all data)
  const conservative = createFHIRSerializer({
    removeNullValues: false,
    compact: false
  });
  
  const conservativeResult = conservative.serializeResource(sampleData);
  console.log('Conservative (preserve nulls, formatted):');
  console.log(conservativeResult);
  console.log();

  // Aggressive optimization
  const aggressive = createFHIRSerializer({
    removeNullValues: true,
    compact: true,
    chunkSize: 500
  });
  
  const aggressiveResult = aggressive.serializeResource(sampleData);
  console.log('Aggressive (remove nulls, compact):');
  console.log(aggressiveResult);
  console.log();

  // Show size difference
  const conservativeSize = Buffer.byteLength(conservativeResult as string);
  const aggressiveSize = Buffer.byteLength(aggressiveResult as string);
  const reduction = ((conservativeSize - aggressiveSize) / conservativeSize * 100);
  
  console.log(`💡 Optimization reduced size by ${reduction.toFixed(1)}%`);
  console.log();
}

async function runPerformanceComparison() {
  console.log('🏁 Performance Comparison');
  console.log('='.repeat(50));
  
  const sizes = [100, 500, 1000];
  
  for (const size of sizes) {
    console.log(`\nTesting with ${size} resources:`);
    
    const bundle = createSampleBundle(size);
    const iterations = 10;
    
    // Measure standard JSON.stringify
    console.time(`Standard (${size} resources)`);
    for (let i = 0; i < iterations; i++) {
      JSON.stringify(bundle);
    }
    console.timeEnd(`Standard (${size} resources)`);
    
    // Measure optimized serialization
    console.time(`Optimized (${size} resources)`);
    for (let i = 0; i < iterations; i++) {
      optimizedStringify.bundle(bundle);
    }
    console.timeEnd(`Optimized (${size} resources)`);
  }
}

async function main() {
  console.log('🔬 FHIR Serialization Optimization Demo');
  console.log('='.repeat(80));
  console.log();
  
  try {
    await demonstrateBasicUsage();
    await demonstrateBundleOptimization();
    await demonstrateStreamingSerialization();
    await demonstrateCustomOptions();
    await runPerformanceComparison();
    
    console.log('✅ Demo completed successfully!');
    console.log('\n💡 Key Benefits:');
    console.log('   • Smaller JSON output (removes null values, empty arrays/objects)');
    console.log('   • Better performance for large bundles (chunked processing)');
    console.log('   • Streaming support for memory efficiency');
    console.log('   • Configurable optimization levels');
    console.log('   • Drop-in replacement for JSON.stringify');
    
  } catch (error) {
    console.error('❌ Demo failed:', error);
    process.exit(1);
  }
}

// Run the demo if this file is executed directly
if (require.main === module) {
  main().catch(console.error);
}

export { main as runSerializationDemo };