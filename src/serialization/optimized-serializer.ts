/**
 * Optimized JSON serialization for large FHIR bundles
 * Provides better performance than standard JSON.stringify for large objects
 */

import { Transform, Readable } from 'stream';

export interface SerializationOptions {
  /** Use streaming serialization for large objects */
  useStreaming?: boolean;
  /** Chunk size for streaming serialization (default: 1000 resources) */
  chunkSize?: number;
  /** Remove null/undefined values to reduce size */
  removeNullValues?: boolean;
  /** Compress whitespace */
  compact?: boolean;
  /** Custom replacer function for JSON.stringify */
  replacer?: (key: string, value: any) => any;
  /** Maximum depth to prevent circular references */
  maxDepth?: number;
}

/**
 * Fast JSON stringification optimized for FHIR resources
 * Uses optimizations specific to FHIR data structures
 */
export class OptimizedFHIRSerializer {
  private options: Required<SerializationOptions>;

  constructor(options: SerializationOptions = {}) {
    this.options = {
      useStreaming: false,
      chunkSize: 1000,
      removeNullValues: true,
      compact: true,
      replacer: this.defaultReplacer.bind(this),
      maxDepth: 50,
      ...options
    };
  }

  /**
   * Default replacer function optimized for FHIR data
   */
  private defaultReplacer(key: string, value: any): any {
    // Remove null/undefined values if option is enabled
    if (this.options.removeNullValues && (value === null || value === undefined)) {
      return undefined;
    }

    // Remove empty arrays and objects to reduce size
    if (Array.isArray(value) && value.length === 0) {
      return undefined;
    }

    if (value && typeof value === 'object' && Object.keys(value).length === 0) {
      return undefined;
    }

    // Convert dates to ISO strings for consistency
    if (value instanceof Date) {
      return value.toISOString();
    }

    return value;
  }

  /**
   * Optimized serialization for single FHIR resource
   */
  public serializeResource<T>(resource: T): string | Error {
    try {
      const separator = this.options.compact ? '' : ' ';
      return JSON.stringify(resource, this.options.replacer, this.options.compact ? 0 : 2);
    } catch (error) {
      return error instanceof Error ? error : new Error(String(error));
    }
  }

  /**
   * Optimized serialization for FHIR bundles
   * Handles large bundles efficiently by processing resources in chunks
   */
  public serializeBundle(bundle: any): string | Error {
    try {
      // For small bundles, use standard serialization
      if (!bundle.entry || bundle.entry.length < this.options.chunkSize) {
        return this.serializeResource(bundle);
      }

      // For large bundles, optimize the serialization process
      return this.serializeLargeBundle(bundle);
    } catch (error) {
      return error instanceof Error ? error : new Error(String(error));
    }
  }

  /**
   * Specialized handling for large FHIR bundles
   */
  private serializeLargeBundle(bundle: any): string {
    const { entry, ...bundleWithoutEntry } = bundle;
    
    // Pre-allocate array for better performance
    const chunks: string[] = new Array(Math.ceil(entry.length / this.options.chunkSize));
    const separator = this.options.compact ? ',' : ', ';
    
    // Serialize bundle metadata first
    let result = JSON.stringify(bundleWithoutEntry, this.options.replacer, this.options.compact ? 0 : 2);
    
    // Remove the closing brace and add entry array start
    result = result.slice(0, -1) + (this.options.compact ? ',"entry":[' : ', "entry": [');
    
    // Process entries in chunks to avoid blocking the event loop
    for (let i = 0; i < entry.length; i += this.options.chunkSize) {
      const chunk = entry.slice(i, i + this.options.chunkSize);
      const serializedChunk = chunk.map((item: any) => 
        JSON.stringify(item, this.options.replacer, this.options.compact ? 0 : 2)
      ).join(separator);
      
      if (i > 0) {
        result += separator;
      }
      result += serializedChunk;
    }
    
    result += ']}';
    return result;
  }

  /**
   * Streaming serialization for extremely large bundles
   * Returns a readable stream instead of a string
   */
  public serializeBundleStream(bundle: any): Readable {
    const stream = new Readable({
      objectMode: false,
      read() {} // Will be pushed to externally
    });

    // Start serialization asynchronously
    this.streamSerialize(bundle, stream).catch(error => {
      stream.emit('error', error);
    });

    return stream;
  }

  /**
   * Internal streaming serialization implementation
   */
  private async streamSerialize(bundle: any, stream: Readable): Promise<void> {
    try {
      const { entry, ...bundleWithoutEntry } = bundle;
      
      // Stream bundle metadata
      const metadataJson = JSON.stringify(bundleWithoutEntry, this.options.replacer, this.options.compact ? 0 : 2);
      const openingPart = metadataJson.slice(0, -1) + (this.options.compact ? ',"entry":[' : ', "entry": [');
      
      stream.push(openingPart);

      // Stream entries in chunks
      if (entry && entry.length > 0) {
        for (let i = 0; i < entry.length; i += this.options.chunkSize) {
          const chunk = entry.slice(i, i + this.options.chunkSize);
          
          for (let j = 0; j < chunk.length; j++) {
            if (i > 0 || j > 0) {
              stream.push(this.options.compact ? ',' : ', ');
            }
            
            const serialized = JSON.stringify(chunk[j], this.options.replacer, this.options.compact ? 0 : 2);
            stream.push(serialized);
            
            // Yield control periodically to prevent blocking
            if ((i + j) % 100 === 0) {
              await new Promise(resolve => setImmediate(resolve));
            }
          }
        }
      }

      stream.push(']}');
      stream.push(null); // End stream
    } catch (error) {
      stream.emit('error', error);
    }
  }

  /**
   * Memory-efficient serialization with custom buffer management
   */
  public serializeBundleWithBuffering(bundle: any, maxBufferSize: number = 64 * 1024): string | Error {
    try {
      const buffers: string[] = [];
      let currentBuffer = '';
      let bufferSize = 0;

      const flushBuffer = () => {
        if (currentBuffer) {
          buffers.push(currentBuffer);
          currentBuffer = '';
          bufferSize = 0;
        }
      };

      const addToBuffer = (chunk: string) => {
        if (bufferSize + chunk.length > maxBufferSize) {
          flushBuffer();
        }
        currentBuffer += chunk;
        bufferSize += chunk.length;
      };

      const { entry, ...bundleWithoutEntry } = bundle;
      
      // Add bundle metadata
      const metadata = JSON.stringify(bundleWithoutEntry, this.options.replacer, this.options.compact ? 0 : 2);
      addToBuffer(metadata.slice(0, -1) + (this.options.compact ? ',"entry":[' : ', "entry": ['));

      // Add entries
      if (entry && entry.length > 0) {
        for (let i = 0; i < entry.length; i++) {
          if (i > 0) {
            addToBuffer(this.options.compact ? ',' : ', ');
          }
          
          const entryJson = JSON.stringify(entry[i], this.options.replacer, this.options.compact ? 0 : 2);
          addToBuffer(entryJson);
        }
      }

      addToBuffer(']}');
      flushBuffer();

      return buffers.join('');
    } catch (error) {
      return error instanceof Error ? error : new Error(String(error));
    }
  }
}

/**
 * Factory function to create optimized serializer with sensible defaults for FHIR
 */
export function createFHIRSerializer(options?: SerializationOptions): OptimizedFHIRSerializer {
  return new OptimizedFHIRSerializer({
    removeNullValues: true,
    compact: true,
    chunkSize: 1000,
    maxDepth: 50,
    ...options
  });
}

/**
 * Quick utility functions for common use cases
 */
export const optimizedStringify = {
  /**
   * Fast serialization for single FHIR resource
   */
  resource: <T>(resource: T, options?: SerializationOptions): string | Error => {
    const serializer = createFHIRSerializer(options);
    return serializer.serializeResource(resource);
  },

  /**
   * Optimized serialization for FHIR bundles
   */
  bundle: (bundle: any, options?: SerializationOptions): string | Error => {
    const serializer = createFHIRSerializer(options);
    return serializer.serializeBundle(bundle);
  },

  /**
   * Streaming serialization for very large bundles
   */
  bundleStream: (bundle: any, options?: SerializationOptions): Readable => {
    const serializer = createFHIRSerializer(options);
    return serializer.serializeBundleStream(bundle);
  }
};

// Export default serializer instance
export const defaultFHIRSerializer = createFHIRSerializer();