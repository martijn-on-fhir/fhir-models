"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSerializationDemo = main;
const index_1 = require("../src/index");
function createSampleBundle(size = 1000) {
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
                deceasedBoolean: null,
                multipleBirthInteger: null,
                photo: []
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
function demonstrateBasicUsage() {
    return __awaiter(this, void 0, void 0, function* () {
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
            deceasedBoolean: null,
            multipleBirthInteger: null
        };
        const standard = JSON.stringify(samplePatient);
        console.log('Standard JSON.stringify:');
        console.log(`Size: ${Buffer.byteLength(standard)} bytes`);
        console.log(standard);
        console.log();
        const optimized = index_1.optimizedStringify.resource(samplePatient);
        console.log('Optimized serialization:');
        console.log(`Size: ${Buffer.byteLength(optimized)} bytes`);
        console.log(optimized);
        console.log();
        const reduction = ((Buffer.byteLength(standard) - Buffer.byteLength(optimized)) / Buffer.byteLength(standard) * 100);
        console.log(`💡 Size reduction: ${reduction.toFixed(1)}%\n`);
    });
}
function demonstrateBundleOptimization() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('📦 Bundle Optimization Demo');
        console.log('='.repeat(50));
        const bundle = createSampleBundle(100);
        console.log('Comparing serialization methods for 100-resource bundle...');
        console.time('Standard JSON.stringify');
        const standardResult = JSON.stringify(bundle);
        console.timeEnd('Standard JSON.stringify');
        console.log(`Standard size: ${(Buffer.byteLength(standardResult) / 1024).toFixed(2)} KB`);
        console.time('Optimized serialization');
        const optimizedResult = index_1.optimizedStringify.bundle(bundle);
        console.timeEnd('Optimized serialization');
        console.log(`Optimized size: ${(Buffer.byteLength(optimizedResult) / 1024).toFixed(2)} KB`);
        const sizeReduction = ((Buffer.byteLength(standardResult) - Buffer.byteLength(optimizedResult)) / Buffer.byteLength(standardResult) * 100);
        console.log(`💡 Size reduction: ${sizeReduction.toFixed(1)}%\n`);
    });
}
function demonstrateStreamingSerialization() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('🌊 Streaming Serialization Demo');
        console.log('='.repeat(50));
        const largeBundle = createSampleBundle(5000);
        console.log(`Created bundle with ${largeBundle.total} resources`);
        const stream = index_1.optimizedStringify.bundleStream(largeBundle);
        let totalSize = 0;
        let chunkCount = 0;
        console.log('Streaming serialization...');
        console.time('Streaming complete');
        return new Promise((resolve, reject) => {
            stream.on('data', (chunk) => {
                totalSize += chunk.length;
                chunkCount++;
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
    });
}
function demonstrateCustomOptions() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('⚙️ Custom Configuration Demo');
        console.log('='.repeat(50));
        const sampleData = {
            resourceType: 'Patient',
            active: true,
            name: [{ family: 'Test' }],
            deceasedBoolean: null,
            photo: [],
            extension: [{
                    url: 'http://example.org/test',
                    valueString: 'test'
                }]
        };
        const conservative = (0, index_1.createFHIRSerializer)({
            removeNullValues: false,
            compact: false
        });
        const conservativeResult = conservative.serializeResource(sampleData);
        console.log('Conservative (preserve nulls, formatted):');
        console.log(conservativeResult);
        console.log();
        const aggressive = (0, index_1.createFHIRSerializer)({
            removeNullValues: true,
            compact: true,
            chunkSize: 500
        });
        const aggressiveResult = aggressive.serializeResource(sampleData);
        console.log('Aggressive (remove nulls, compact):');
        console.log(aggressiveResult);
        console.log();
        const conservativeSize = Buffer.byteLength(conservativeResult);
        const aggressiveSize = Buffer.byteLength(aggressiveResult);
        const reduction = ((conservativeSize - aggressiveSize) / conservativeSize * 100);
        console.log(`💡 Optimization reduced size by ${reduction.toFixed(1)}%`);
        console.log();
    });
}
function runPerformanceComparison() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('🏁 Performance Comparison');
        console.log('='.repeat(50));
        const sizes = [100, 500, 1000];
        for (const size of sizes) {
            console.log(`\nTesting with ${size} resources:`);
            const bundle = createSampleBundle(size);
            const iterations = 10;
            console.time(`Standard (${size} resources)`);
            for (let i = 0; i < iterations; i++) {
                JSON.stringify(bundle);
            }
            console.timeEnd(`Standard (${size} resources)`);
            console.time(`Optimized (${size} resources)`);
            for (let i = 0; i < iterations; i++) {
                index_1.optimizedStringify.bundle(bundle);
            }
            console.timeEnd(`Optimized (${size} resources)`);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('🔬 FHIR Serialization Optimization Demo');
        console.log('='.repeat(80));
        console.log();
        try {
            yield demonstrateBasicUsage();
            yield demonstrateBundleOptimization();
            yield demonstrateStreamingSerialization();
            yield demonstrateCustomOptions();
            yield runPerformanceComparison();
            console.log('✅ Demo completed successfully!');
            console.log('\n💡 Key Benefits:');
            console.log('   • Smaller JSON output (removes null values, empty arrays/objects)');
            console.log('   • Better performance for large bundles (chunked processing)');
            console.log('   • Streaming support for memory efficiency');
            console.log('   • Configurable optimization levels');
            console.log('   • Drop-in replacement for JSON.stringify');
        }
        catch (error) {
            console.error('❌ Demo failed:', error);
            process.exit(1);
        }
    });
}
if (require.main === module) {
    main().catch(console.error);
}
//# sourceMappingURL=serialization-demo.js.map