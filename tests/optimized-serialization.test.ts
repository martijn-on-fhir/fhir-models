/**
 * Tests for optimized FHIR serialization
 */

import { 
  OptimizedFHIRSerializer, 
  createFHIRSerializer, 
  optimizedStringify,
  defaultFHIRSerializer 
} from '../src/serialization/optimized-serializer';
import { Patient } from '../src/resources/Patient';
import { Readable } from 'stream';

describe('Optimized FHIR Serialization', () => {

  // Sample FHIR resource for testing
  const samplePatient = {
    resourceType: 'Patient',
    id: 'test-patient',
    active: true,
    name: [{
      use: 'official',
      family: 'TestFamily',
      given: ['TestGiven']
    }],
    gender: 'male',
    birthDate: '1980-01-01',
    // Include null values to test cleanup
    deceasedBoolean: null,
    multipleBirthInteger: null
  };

  // Sample FHIR bundle for testing
  const sampleBundle = {
    resourceType: 'Bundle',
    id: 'test-bundle',
    type: 'collection',
    total: 2,
    entry: [
      {
        fullUrl: 'Patient/1',
        resource: { ...samplePatient, id: 'patient-1' }
      },
      {
        fullUrl: 'Patient/2',
        resource: { ...samplePatient, id: 'patient-2' }
      }
    ]
  };

  describe('OptimizedFHIRSerializer Class', () => {
    
    describe('Constructor and Configuration', () => {
      it('should create serializer with default options', () => {
        const serializer = new OptimizedFHIRSerializer();
        
        expect(serializer).toBeInstanceOf(OptimizedFHIRSerializer);
      });

      it('should create serializer with custom options', () => {
        const serializer = new OptimizedFHIRSerializer({
          removeNullValues: false,
          compact: false,
          chunkSize: 500
        });
        
        expect(serializer).toBeInstanceOf(OptimizedFHIRSerializer);
      });
    });

    describe('Resource Serialization', () => {
      let serializer: OptimizedFHIRSerializer;

      beforeEach(() => {
        serializer = new OptimizedFHIRSerializer();
      });

      it('should serialize a single FHIR resource', () => {
        const result = serializer.serializeResource(samplePatient);
        
        expect(typeof result).toBe('string');
        expect(result).not.toBeInstanceOf(Error);
        
        const parsed = JSON.parse(result as string);
        expect(parsed.resourceType).toBe('Patient');
        expect(parsed.id).toBe('test-patient');
        expect(parsed.active).toBe(true);
      });

      it('should remove null values when option is enabled', () => {
        const serializerWithNullRemoval = new OptimizedFHIRSerializer({
          removeNullValues: true
        });
        
        const result = serializerWithNullRemoval.serializeResource(samplePatient);
        
        expect(typeof result).toBe('string');
        const parsed = JSON.parse(result as string);
        
        // Null values should be removed
        expect(parsed.deceasedBoolean).toBeUndefined();
        expect(parsed.multipleBirthInteger).toBeUndefined();
      });

      it('should preserve null values when option is disabled', () => {
        const serializerWithoutNullRemoval = new OptimizedFHIRSerializer({
          removeNullValues: false
        });
        
        const result = serializerWithoutNullRemoval.serializeResource(samplePatient);
        
        expect(typeof result).toBe('string');
        const parsed = JSON.parse(result as string);
        
        // Null values should be preserved
        expect(parsed.deceasedBoolean).toBe(null);
        expect(parsed.multipleBirthInteger).toBe(null);
      });

      it('should handle errors gracefully', () => {
        // Create circular reference
        const circular: any = { name: 'test' };
        circular.self = circular;
        
        const result = serializer.serializeResource(circular);
        
        expect(result).toBeInstanceOf(Error);
      });
    });

    describe('Bundle Serialization', () => {
      let serializer: OptimizedFHIRSerializer;

      beforeEach(() => {
        serializer = new OptimizedFHIRSerializer();
      });

      it('should serialize a small FHIR bundle', () => {
        const result = serializer.serializeBundle(sampleBundle);
        
        expect(typeof result).toBe('string');
        expect(result).not.toBeInstanceOf(Error);
        
        const parsed = JSON.parse(result as string);
        expect(parsed.resourceType).toBe('Bundle');
        expect(parsed.entry).toHaveLength(2);
        expect(parsed.total).toBe(2);
      });

      it('should handle large bundles with chunking', () => {
        const largeBundle = {
          ...sampleBundle,
          entry: Array(2000).fill(0).map((_, i) => ({
            fullUrl: `Patient/${i}`,
            resource: { ...samplePatient, id: `patient-${i}` }
          }))
        };

        const result = serializer.serializeBundle(largeBundle);
        
        expect(typeof result).toBe('string');
        expect(result).not.toBeInstanceOf(Error);
        
        const parsed = JSON.parse(result as string);
        expect(parsed.resourceType).toBe('Bundle');
        expect(parsed.entry).toHaveLength(2000);
      });

      it('should serialize bundle without entry array', () => {
        const bundleWithoutEntry = {
          resourceType: 'Bundle',
          id: 'empty-bundle',
          type: 'collection',
          total: 0
        };

        const result = serializer.serializeBundle(bundleWithoutEntry);
        
        expect(typeof result).toBe('string');
        expect(result).not.toBeInstanceOf(Error);
        
        const parsed = JSON.parse(result as string);
        expect(parsed.resourceType).toBe('Bundle');
        expect(parsed.entry).toBeUndefined();
      });
    });

    describe('Buffered Serialization', () => {
      let serializer: OptimizedFHIRSerializer;

      beforeEach(() => {
        serializer = new OptimizedFHIRSerializer();
      });

      it('should serialize with custom buffer size', () => {
        const result = serializer.serializeBundleWithBuffering(sampleBundle, 1024);
        
        expect(typeof result).toBe('string');
        expect(result).not.toBeInstanceOf(Error);
        
        const parsed = JSON.parse(result as string);
        expect(parsed.resourceType).toBe('Bundle');
        expect(parsed.entry).toHaveLength(2);
      });

      it('should handle large bundles with buffering', () => {
        const largeBundle = {
          ...sampleBundle,
          entry: Array(1000).fill(0).map((_, i) => ({
            fullUrl: `Patient/${i}`,
            resource: { ...samplePatient, id: `patient-${i}` }
          }))
        };

        const result = serializer.serializeBundleWithBuffering(largeBundle, 4096);
        
        expect(typeof result).toBe('string');
        expect(result).not.toBeInstanceOf(Error);
        
        const parsed = JSON.parse(result as string);
        expect(parsed.entry).toHaveLength(1000);
      });
    });

    describe('Streaming Serialization', () => {
      let serializer: OptimizedFHIRSerializer;

      beforeEach(() => {
        serializer = new OptimizedFHIRSerializer();
      });

      it('should return a readable stream', () => {
        const stream = serializer.serializeBundleStream(sampleBundle);
        
        expect(stream).toBeInstanceOf(Readable);
      });

      it('should stream complete JSON through the stream', (done) => {
        const stream = serializer.serializeBundleStream(sampleBundle);
        
        let chunks: string[] = [];
        
        stream.on('data', (chunk) => {
          chunks.push(chunk.toString());
        });
        
        stream.on('end', () => {
          const completeJson = chunks.join('');
          const parsed = JSON.parse(completeJson);
          
          expect(parsed.resourceType).toBe('Bundle');
          expect(parsed.entry).toHaveLength(2);
          done();
        });
        
        stream.on('error', done);
      });

      it('should handle empty bundle streaming', (done) => {
        const emptyBundle = {
          resourceType: 'Bundle',
          id: 'empty',
          type: 'collection',
          total: 0,
          entry: []
        };

        const stream = serializer.serializeBundleStream(emptyBundle);
        
        let chunks: string[] = [];
        
        stream.on('data', (chunk) => {
          chunks.push(chunk.toString());
        });
        
        stream.on('end', () => {
          const completeJson = chunks.join('');
          const parsed = JSON.parse(completeJson);
          
          expect(parsed.resourceType).toBe('Bundle');
          expect(parsed.entry).toHaveLength(0);
          done();
        });
        
        stream.on('error', done);
      });
    });
  });

  describe('Factory Functions', () => {
    
    describe('createFHIRSerializer', () => {
      it('should create serializer with default FHIR options', () => {
        const serializer = createFHIRSerializer();
        
        expect(serializer).toBeInstanceOf(OptimizedFHIRSerializer);
      });

      it('should create serializer with custom options', () => {
        const serializer = createFHIRSerializer({
          compact: false,
          chunkSize: 2000
        });
        
        expect(serializer).toBeInstanceOf(OptimizedFHIRSerializer);
      });
    });

    describe('defaultFHIRSerializer', () => {
      it('should provide a default serializer instance', () => {
        expect(defaultFHIRSerializer).toBeInstanceOf(OptimizedFHIRSerializer);
      });

      it('should serialize resources consistently', () => {
        const result1 = defaultFHIRSerializer.serializeResource(samplePatient);
        const result2 = defaultFHIRSerializer.serializeResource(samplePatient);
        
        expect(result1).toBe(result2);
      });
    });
  });

  describe('Utility Functions', () => {
    
    describe('optimizedStringify.resource', () => {
      it('should serialize a resource with default options', () => {
        const result = optimizedStringify.resource(samplePatient);
        
        expect(typeof result).toBe('string');
        expect(result).not.toBeInstanceOf(Error);
        
        const parsed = JSON.parse(result as string);
        expect(parsed.resourceType).toBe('Patient');
      });

      it('should serialize with custom options', () => {
        const result = optimizedStringify.resource(samplePatient, {
          removeNullValues: false
        });
        
        expect(typeof result).toBe('string');
        const parsed = JSON.parse(result as string);
        expect(parsed.deceasedBoolean).toBe(null);
      });
    });

    describe('optimizedStringify.bundle', () => {
      it('should serialize a bundle with default options', () => {
        const result = optimizedStringify.bundle(sampleBundle);
        
        expect(typeof result).toBe('string');
        expect(result).not.toBeInstanceOf(Error);
        
        const parsed = JSON.parse(result as string);
        expect(parsed.resourceType).toBe('Bundle');
        expect(parsed.entry).toHaveLength(2);
      });

      it('should handle large bundles', () => {
        const largeBundle = {
          ...sampleBundle,
          entry: Array(3000).fill(0).map((_, i) => ({
            fullUrl: `Patient/${i}`,
            resource: { ...samplePatient, id: `patient-${i}` }
          }))
        };

        const result = optimizedStringify.bundle(largeBundle);
        
        expect(typeof result).toBe('string');
        expect(result).not.toBeInstanceOf(Error);
        
        const parsed = JSON.parse(result as string);
        expect(parsed.entry).toHaveLength(3000);
      });
    });

    describe('optimizedStringify.bundleStream', () => {
      it('should return a readable stream', () => {
        const stream = optimizedStringify.bundleStream(sampleBundle);
        
        expect(stream).toBeInstanceOf(Readable);
      });

      it('should stream valid JSON', (done) => {
        const stream = optimizedStringify.bundleStream(sampleBundle);
        
        let chunks: string[] = [];
        
        stream.on('data', (chunk) => {
          chunks.push(chunk.toString());
        });
        
        stream.on('end', () => {
          const completeJson = chunks.join('');
          
          expect(() => JSON.parse(completeJson)).not.toThrow();
          done();
        });
        
        stream.on('error', done);
      });
    });
  });

  describe('Performance and Edge Cases', () => {
    
    it('should handle deeply nested objects', () => {
      const deepObject = {
        resourceType: 'Patient',
        level1: {
          level2: {
            level3: {
              level4: {
                level5: {
                  data: 'deep value'
                }
              }
            }
          }
        }
      };

      const result = optimizedStringify.resource(deepObject);
      
      expect(typeof result).toBe('string');
      const parsed = JSON.parse(result as string);
      expect(parsed.level1.level2.level3.level4.level5.data).toBe('deep value');
    });

    it('should handle arrays with mixed content', () => {
      const mixedBundle = {
        resourceType: 'Bundle',
        entry: [
          { resource: { resourceType: 'Patient', id: '1' } },
          { resource: { resourceType: 'Observation', id: '2' } },
          { resource: { resourceType: 'Medication', id: '3' } }
        ]
      };

      const result = optimizedStringify.bundle(mixedBundle);
      
      expect(typeof result).toBe('string');
      const parsed = JSON.parse(result as string);
      expect(parsed.entry).toHaveLength(3);
    });

    it('should handle empty objects and arrays', () => {
      const emptyBundle = {
        resourceType: 'Bundle',
        emptyObject: {},
        emptyArray: [],
        entry: []
      };

      const result = optimizedStringify.bundle(emptyBundle, {
        removeNullValues: true
      });
      
      expect(typeof result).toBe('string');
      const parsed = JSON.parse(result as string);
      
      // Empty objects and arrays should be removed when removeNullValues is true
      expect(parsed.emptyObject).toBeUndefined();
      expect(parsed.emptyArray).toBeUndefined();
    });

    it('should handle Date objects', () => {
      const resourceWithDate = {
        ...samplePatient,
        timestamp: new Date('2023-01-01T12:00:00Z'),
        meta: {
          lastUpdated: new Date('2023-01-02T12:00:00Z')
        }
      };

      const result = optimizedStringify.resource(resourceWithDate);
      
      expect(typeof result).toBe('string');
      const parsed = JSON.parse(result as string);
      expect(parsed.timestamp).toBe('2023-01-01T12:00:00.000Z');
      expect(parsed.meta.lastUpdated).toBe('2023-01-02T12:00:00.000Z');
    });
  });

  describe('Comparison with Standard JSON.stringify', () => {
    
    it('should produce equivalent output for simple objects', () => {
      const standardResult = JSON.stringify(samplePatient);
      const optimizedResult = optimizedStringify.resource(samplePatient, {
        removeNullValues: false,
        compact: false
      });
      
      expect(typeof optimizedResult).toBe('string');
      
      const standardParsed = JSON.parse(standardResult);
      const optimizedParsed = JSON.parse(optimizedResult as string);
      
      expect(optimizedParsed).toEqual(standardParsed);
    });

    it('should produce smaller output when optimization is enabled', () => {
      const standardResult = JSON.stringify(samplePatient);
      const optimizedResult = optimizedStringify.resource(samplePatient, {
        removeNullValues: true,
        compact: true
      });
      
      expect(typeof optimizedResult).toBe('string');
      expect((optimizedResult as string).length).toBeLessThan(standardResult.length);
    });
  });
});