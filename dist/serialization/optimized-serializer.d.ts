import { Readable } from 'stream';
export interface SerializationOptions {
    useStreaming?: boolean;
    chunkSize?: number;
    removeNullValues?: boolean;
    compact?: boolean;
    replacer?: (key: string, value: any) => any;
    maxDepth?: number;
}
export declare class OptimizedFHIRSerializer {
    private options;
    constructor(options?: SerializationOptions);
    private defaultReplacer;
    serializeResource<T>(resource: T): string | Error;
    serializeBundle(bundle: any): string | Error;
    private serializeLargeBundle;
    serializeBundleStream(bundle: any): Readable;
    private streamSerialize;
    serializeBundleWithBuffering(bundle: any, maxBufferSize?: number): string | Error;
}
export declare function createFHIRSerializer(options?: SerializationOptions): OptimizedFHIRSerializer;
export declare const optimizedStringify: {
    resource: <T>(resource: T, options?: SerializationOptions) => string | Error;
    bundle: (bundle: any, options?: SerializationOptions) => string | Error;
    bundleStream: (bundle: any, options?: SerializationOptions) => Readable;
};
export declare const defaultFHIRSerializer: OptimizedFHIRSerializer;
//# sourceMappingURL=optimized-serializer.d.ts.map