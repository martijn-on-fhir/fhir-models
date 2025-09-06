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
exports.runSerializationBenchmark = runSerializationBenchmark;
exports.quickBenchmark = quickBenchmark;
const perf_hooks_1 = require("perf_hooks");
const optimized_serializer_1 = require("./optimized-serializer");
function createSampleBundle(resourceCount) {
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
                extension: [{
                        url: 'http://example.org/patient-importance',
                        valueString: i % 10 === 0 ? 'VIP' : 'standard'
                    }],
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
function measureMemoryUsage() {
    if (typeof process !== 'undefined' && process.memoryUsage) {
        return process.memoryUsage().heapUsed;
    }
    return 0;
}
function benchmarkStandardStringify(bundle, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const iterations = options.iterations || 10;
        const warmup = options.warmupIterations || 2;
        for (let i = 0; i < warmup; i++) {
            JSON.stringify(bundle);
        }
        const startMemory = options.measureMemory ? measureMemoryUsage() : 0;
        const startTime = perf_hooks_1.performance.now();
        let result = '';
        for (let i = 0; i < iterations; i++) {
            result = JSON.stringify(bundle);
        }
        const endTime = perf_hooks_1.performance.now();
        const endMemory = options.measureMemory ? measureMemoryUsage() : 0;
        const duration = (endTime - startTime) / iterations;
        const outputSize = Buffer.byteLength(result, 'utf8');
        const resourceCount = ((_a = bundle.entry) === null || _a === void 0 ? void 0 : _a.length) || 0;
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
    });
}
function benchmarkOptimizedSerialization(bundle, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const iterations = options.iterations || 10;
        const warmup = options.warmupIterations || 2;
        const serializer = (0, optimized_serializer_1.createFHIRSerializer)({ removeNullValues: true, compact: true });
        for (let i = 0; i < warmup; i++) {
            serializer.serializeBundle(bundle);
        }
        const startMemory = options.measureMemory ? measureMemoryUsage() : 0;
        const startTime = perf_hooks_1.performance.now();
        let result = '';
        for (let i = 0; i < iterations; i++) {
            const serialized = serializer.serializeBundle(bundle);
            result = typeof serialized === 'string' ? serialized : '';
        }
        const endTime = perf_hooks_1.performance.now();
        const endMemory = options.measureMemory ? measureMemoryUsage() : 0;
        const duration = (endTime - startTime) / iterations;
        const outputSize = Buffer.byteLength(result, 'utf8');
        const resourceCount = ((_a = bundle.entry) === null || _a === void 0 ? void 0 : _a.length) || 0;
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
    });
}
function benchmarkChunkedSerialization(bundle, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const iterations = options.iterations || 10;
        const warmup = options.warmupIterations || 2;
        const serializer = (0, optimized_serializer_1.createFHIRSerializer)({
            removeNullValues: true,
            compact: true,
            chunkSize: 500
        });
        for (let i = 0; i < warmup; i++) {
            serializer.serializeBundleWithBuffering(bundle);
        }
        const startMemory = options.measureMemory ? measureMemoryUsage() : 0;
        const startTime = perf_hooks_1.performance.now();
        let result = '';
        for (let i = 0; i < iterations; i++) {
            const serialized = serializer.serializeBundleWithBuffering(bundle);
            result = typeof serialized === 'string' ? serialized : '';
        }
        const endTime = perf_hooks_1.performance.now();
        const endMemory = options.measureMemory ? measureMemoryUsage() : 0;
        const duration = (endTime - startTime) / iterations;
        const outputSize = Buffer.byteLength(result, 'utf8');
        const resourceCount = ((_a = bundle.entry) === null || _a === void 0 ? void 0 : _a.length) || 0;
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
    });
}
function runSerializationBenchmark() {
    return __awaiter(this, arguments, void 0, function* (resourceCounts = [100, 500, 1000, 5000, 10000], benchmarkOptions = {}) {
        const results = [];
        console.log('🚀 Running FHIR Serialization Performance Benchmark');
        console.log('='.repeat(80));
        for (const count of resourceCounts) {
            console.log(`\n📊 Benchmarking with ${count.toLocaleString()} resources...`);
            const bundle = createSampleBundle(count);
            const bundleResults = [];
            console.log('  - Testing JSON.stringify...');
            const standardResult = yield benchmarkStandardStringify(bundle, benchmarkOptions);
            bundleResults.push(standardResult);
            console.log('  - Testing optimized FHIR serialization...');
            const optimizedResult = yield benchmarkOptimizedSerialization(bundle, benchmarkOptions);
            bundleResults.push(optimizedResult);
            if (count >= 1000) {
                console.log('  - Testing chunked serialization...');
                const chunkedResult = yield benchmarkChunkedSerialization(bundle, benchmarkOptions);
                bundleResults.push(chunkedResult);
            }
            results.push(bundleResults);
            printBenchmarkResults(bundleResults, count);
        }
        printSummaryTable(results, resourceCounts);
        return results;
    });
}
function printBenchmarkResults(results, resourceCount) {
    console.log(`\n  Results for ${resourceCount.toLocaleString()} resources:`);
    console.log('  ' + '-'.repeat(70));
    results.forEach(result => {
        const throughputStr = result.throughput.toFixed(0);
        const durationStr = result.duration.toFixed(2);
        const sizeStr = (result.outputSize / 1024 / 1024).toFixed(2);
        console.log(`  ${result.method.padEnd(20)} | ${durationStr.padStart(8)}ms | ${throughputStr.padStart(8)} res/s | ${sizeStr.padStart(8)}MB`);
    });
    if (results.length >= 2) {
        const standardTime = results[0].duration;
        const optimizedTime = results[1].duration;
        const improvement = ((standardTime - optimizedTime) / standardTime * 100);
        const sizeReduction = ((results[0].outputSize - results[1].outputSize) / results[0].outputSize * 100);
        console.log(`\n  💡 Performance: ${improvement > 0 ? improvement.toFixed(1) : '0'}% faster`);
        console.log(`  📦 Size: ${sizeReduction > 0 ? sizeReduction.toFixed(1) : '0'}% smaller`);
    }
}
function printSummaryTable(results, resourceCounts) {
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
        console.log(count.toLocaleString().padEnd(12) +
            standard.throughput.toFixed(0).padStart(12) +
            optimized.throughput.toFixed(0).padStart(12) +
            `${improvement.toFixed(1)}%`.padStart(12));
    });
    console.log('\nMemory efficiency and size reduction make the optimized version');
    console.log('particularly suitable for large FHIR bundles and resource-constrained environments.');
}
function quickBenchmark() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('🏃‍♂️ Running Quick Benchmark...\n');
        const bundle = createSampleBundle(1000);
        const options = { iterations: 5, measureMemory: true };
        const [standard, optimized] = yield Promise.all([
            benchmarkStandardStringify(bundle, options),
            benchmarkOptimizedSerialization(bundle, options)
        ]);
        printBenchmarkResults([standard, optimized], 1000);
    });
}
if (require.main === module) {
    runSerializationBenchmark().catch(console.error);
}
//# sourceMappingURL=performance-benchmark.js.map