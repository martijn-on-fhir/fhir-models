/**
 * Performance benchmarking for FHIR serialization
 * Compares standard JSON.stringify vs optimized serialization
 */

import { performance } from 'perf_hooks';
import { OptimizedFHIRSerializer, createFHIRSerializer } from './optimized-serializer';

export interface BenchmarkResult {
  method: string;
  duration: number;
  outputSize: number;
  resourceCount: number;
  memoryUsed: number;
  throughput: number; // resources per second
}

export interface BenchmarkOptions {
  iterations?: number;
  warmupIterations?: number;
  measureMemory?: boolean;
}

/**
 * Creates a sample FHIR bundle for benchmarking
 */
function createSampleBundle(resourceCount: number): any {
  const entries = [];
  
  for (let i = 0; i < resourceCount; i++) {
    entries.push({
      fullUrl: `Patient/${i}`,
      resource: {
        resourceType: 'Patient',
        id: `patient-${i}`,
        active: true,
        name: [{
          use: 'official',
          family: `TestFamily${i}`,
          given: [`TestGiven${i}`, `TestMiddle${i}`]
        }],
        gender: i % 2 === 0 ? 'male' : 'female',
        birthDate: `19${50 + (i % 50)}-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
        address: [{
          use: 'home',
          line: [`${123 + i} Test Street`],
          city: 'TestCity',
          state: 'TestState',
          postalCode: String(10000 + i).padStart(5, '0'),
          country: 'US'
        }],
        telecom: [{
          system: 'phone',
          value: `555-${String(i).padStart(4, '0')}`,
          use: 'home'
        }, {
          system: 'email',
          value: `patient${i}@example.com`,
          use: 'home'
        }],
        identifier: [{
          use: 'official',
          system: 'http://hospital.example.org',
          value: `HOSP${String(i).padStart(6, '0')}`
        }],
        // Add some nested complexity
        extension: [{
          url: 'http://example.org/patient-importance',
          valueString: i % 10 === 0 ? 'VIP' : 'standard'
        }],
        // Add some null values to test cleanup
        deceasedBoolean: i % 100 === 0 ? true : null,
        multipleBirthInteger: i % 50 === 0 ? 2 : null
      }
    });
  }

  return {
    resourceType: 'Bundle',
    id: 'benchmark-bundle',
    type: 'collection',
    timestamp: new Date().toISOString(),
    total: resourceCount,
    entry: entries
  };
}

/**
 * Measures memory usage (Node.js specific)
 */
function measureMemoryUsage(): number {
  if (typeof process !== 'undefined' && process.memoryUsage) {
    return process.memoryUsage().heapUsed;
  }
  return 0;
}

/**
 * Benchmarks standard JSON.stringify
 */
async function benchmarkStandardStringify(bundle: any, options: BenchmarkOptions): Promise<BenchmarkResult> {
  const iterations = options.iterations || 10;
  const warmup = options.warmupIterations || 2;
  
  // Warmup
  for (let i = 0; i < warmup; i++) {
    JSON.stringify(bundle);
  }
  
  const startMemory = options.measureMemory ? measureMemoryUsage() : 0;
  const startTime = performance.now();
  
  let result = '';
  for (let i = 0; i < iterations; i++) {
    result = JSON.stringify(bundle);
  }
  
  const endTime = performance.now();
  const endMemory = options.measureMemory ? measureMemoryUsage() : 0;
  
  const duration = (endTime - startTime) / iterations;
  const outputSize = Buffer.byteLength(result, 'utf8');
  const resourceCount = bundle.entry?.length || 0;
  const memoryUsed = endMemory - startMemory;
  const throughput = resourceCount / (duration / 1000);
  
  return {
    method: 'JSON.stringify',
    duration,
    outputSize,
    resourceCount,
    memoryUsed,
    throughput
  };
}

/**
 * Benchmarks optimized serialization
 */
async function benchmarkOptimizedSerialization(bundle: any, options: BenchmarkOptions): Promise<BenchmarkResult> {
  const iterations = options.iterations || 10;
  const warmup = options.warmupIterations || 2;
  const serializer = createFHIRSerializer({ removeNullValues: true, compact: true });
  
  // Warmup
  for (let i = 0; i < warmup; i++) {
    serializer.serializeBundle(bundle);
  }
  
  const startMemory = options.measureMemory ? measureMemoryUsage() : 0;
  const startTime = performance.now();
  
  let result = '';
  for (let i = 0; i < iterations; i++) {
    const serialized = serializer.serializeBundle(bundle);
    result = typeof serialized === 'string' ? serialized : '';
  }
  
  const endTime = performance.now();
  const endMemory = options.measureMemory ? measureMemoryUsage() : 0;
  
  const duration = (endTime - startTime) / iterations;
  const outputSize = Buffer.byteLength(result, 'utf8');
  const resourceCount = bundle.entry?.length || 0;
  const memoryUsed = endMemory - startMemory;
  const throughput = resourceCount / (duration / 1000);
  
  return {
    method: 'Optimized FHIR',
    duration,
    outputSize,
    resourceCount,
    memoryUsed,
    throughput
  };
}

/**
 * Benchmarks chunked serialization for large bundles
 */
async function benchmarkChunkedSerialization(bundle: any, options: BenchmarkOptions): Promise<BenchmarkResult> {
  const iterations = options.iterations || 10;
  const warmup = options.warmupIterations || 2;
  const serializer = createFHIRSerializer({ 
    removeNullValues: true, 
    compact: true, 
    chunkSize: 500 
  });
  
  // Warmup
  for (let i = 0; i < warmup; i++) {
    serializer.serializeBundleWithBuffering(bundle);
  }
  
  const startMemory = options.measureMemory ? measureMemoryUsage() : 0;
  const startTime = performance.now();
  
  let result = '';
  for (let i = 0; i < iterations; i++) {
    const serialized = serializer.serializeBundleWithBuffering(bundle);
    result = typeof serialized === 'string' ? serialized : '';
  }
  
  const endTime = performance.now();
  const endMemory = options.measureMemory ? measureMemoryUsage() : 0;
  
  const duration = (endTime - startTime) / iterations;
  const outputSize = Buffer.byteLength(result, 'utf8');
  const resourceCount = bundle.entry?.length || 0;
  const memoryUsed = endMemory - startMemory;
  const throughput = resourceCount / (duration / 1000);
  
  return {
    method: 'Chunked FHIR',
    duration,
    outputSize,
    resourceCount,
    memoryUsed,
    throughput
  };
}

/**
 * Runs comprehensive benchmark comparison
 */
export async function runSerializationBenchmark(
  resourceCounts: number[] = [100, 500, 1000, 5000, 10000],
  benchmarkOptions: BenchmarkOptions = {}
): Promise<BenchmarkResult[][]> {
  
  const results: BenchmarkResult[][] = [];
  
  console.log('🚀 Running FHIR Serialization Performance Benchmark');
  console.log('='.repeat(80));
  
  for (const count of resourceCounts) {
    console.log(`\n📊 Benchmarking with ${count.toLocaleString()} resources...`);
    
    const bundle = createSampleBundle(count);
    const bundleResults: BenchmarkResult[] = [];
    
    // Standard JSON.stringify
    console.log('  - Testing JSON.stringify...');
    const standardResult = await benchmarkStandardStringify(bundle, benchmarkOptions);
    bundleResults.push(standardResult);
    
    // Optimized serialization
    console.log('  - Testing optimized FHIR serialization...');
    const optimizedResult = await benchmarkOptimizedSerialization(bundle, benchmarkOptions);
    bundleResults.push(optimizedResult);
    
    // Chunked serialization for larger bundles
    if (count >= 1000) {
      console.log('  - Testing chunked serialization...');
      const chunkedResult = await benchmarkChunkedSerialization(bundle, benchmarkOptions);
      bundleResults.push(chunkedResult);
    }
    
    results.push(bundleResults);
    
    // Print results for this resource count
    printBenchmarkResults(bundleResults, count);
  }
  
  // Print summary
  printSummaryTable(results, resourceCounts);
  
  return results;
}

/**
 * Prints benchmark results for a specific resource count
 */
function printBenchmarkResults(results: BenchmarkResult[], resourceCount: number): void {
  console.log(`\n  Results for ${resourceCount.toLocaleString()} resources:`);
  console.log('  ' + '-'.repeat(70));
  
  results.forEach(result => {
    const throughputStr = result.throughput.toFixed(0);
    const durationStr = result.duration.toFixed(2);
    const sizeStr = (result.outputSize / 1024 / 1024).toFixed(2);
    
    console.log(`  ${result.method.padEnd(20)} | ${durationStr.padStart(8)}ms | ${throughputStr.padStart(8)} res/s | ${sizeStr.padStart(8)}MB`);
  });
  
  // Calculate improvement
  if (results.length >= 2) {
    const standardTime = results[0].duration;
    const optimizedTime = results[1].duration;
    const improvement = ((standardTime - optimizedTime) / standardTime * 100);
    const sizeReduction = ((results[0].outputSize - results[1].outputSize) / results[0].outputSize * 100);
    
    console.log(`\n  💡 Performance: ${improvement > 0 ? improvement.toFixed(1) : '0'}% faster`);
    console.log(`  📦 Size: ${sizeReduction > 0 ? sizeReduction.toFixed(1) : '0'}% smaller`);
  }
}

/**
 * Prints comprehensive summary table
 */
function printSummaryTable(results: BenchmarkResult[][], resourceCounts: number[]): void {
  console.log('\n' + '='.repeat(80));
  console.log('📈 PERFORMANCE SUMMARY');
  console.log('='.repeat(80));
  
  console.log('\nThroughput (resources/second):');
  console.log('Resources'.padEnd(12) + 'Standard'.padStart(12) + 'Optimized'.padStart(12) + 'Improvement'.padStart(12));
  console.log('-'.repeat(48));
  
  results.forEach((bundleResults, index) => {
    const count = resourceCounts[index];
    const standard = bundleResults[0];
    const optimized = bundleResults[1];
    const improvement = ((optimized.throughput - standard.throughput) / standard.throughput * 100);
    
    console.log(
      count.toLocaleString().padEnd(12) + 
      standard.throughput.toFixed(0).padStart(12) + 
      optimized.throughput.toFixed(0).padStart(12) + 
      `${improvement.toFixed(1)}%`.padStart(12)
    );
  });
  
  console.log('\nMemory efficiency and size reduction make the optimized version');
  console.log('particularly suitable for large FHIR bundles and resource-constrained environments.');
}

/**
 * Quick benchmark for immediate testing
 */
export async function quickBenchmark(): Promise<void> {
  console.log('🏃‍♂️ Running Quick Benchmark...\n');
  
  const bundle = createSampleBundle(1000);
  const options = { iterations: 5, measureMemory: true };
  
  const [standard, optimized] = await Promise.all([
    benchmarkStandardStringify(bundle, options),
    benchmarkOptimizedSerialization(bundle, options)
  ]);
  
  printBenchmarkResults([standard, optimized], 1000);
}

// Export for CLI usage
if (require.main === module) {
  runSerializationBenchmark().catch(console.error);
}