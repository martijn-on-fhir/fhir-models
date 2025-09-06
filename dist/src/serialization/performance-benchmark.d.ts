export interface BenchmarkResult {
    method: string;
    duration: number;
    outputSize: number;
    resourceCount: number;
    memoryUsed: number;
    throughput: number;
}
export interface BenchmarkOptions {
    iterations?: number;
    warmupIterations?: number;
    measureMemory?: boolean;
}
export declare function runSerializationBenchmark(resourceCounts?: number[], benchmarkOptions?: BenchmarkOptions): Promise<BenchmarkResult[][]>;
export declare function quickBenchmark(): Promise<void>;
//# sourceMappingURL=performance-benchmark.d.ts.map