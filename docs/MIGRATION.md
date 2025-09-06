# Migration Guide

This guide documents how to update existing code to use the optimized FHIR serialization features introduced in version 1.1.0.

## Overview

The library now includes optimized JSON serialization for FHIR resources with significant performance improvements for large bundles and streaming capabilities.

## Breaking Changes

### objectToJson Function Enhancement

The `objectToJson` function now automatically detects FHIR resources and applies optimized serialization.

**Before (v1.0.x):**
```typescript
import { objectToJson } from 'fhir-models';

const patient = { resourceType: 'Patient', id: 'test' };
const json = objectToJson(patient); // Uses standard JSON.stringify
```

**After (v1.1.0+):**
```typescript
import { objectToJson } from 'fhir-models';

const patient = { resourceType: 'Patient', id: 'test' };
const json = objectToJson(patient); // Automatically uses optimized serialization for FHIR resources
```

**Impact:** No code changes required - existing code will automatically benefit from optimized serialization.

## New Features

### 1. OptimizedFHIRSerializer Class

Replace manual JSON.stringify calls with the new optimized serializer:

**Before:**
```typescript
const bundleJson = JSON.stringify(largeFHIRBundle);
```

**After:**
```typescript
import { OptimizedFHIRSerializer } from 'fhir-models';

const serializer = new OptimizedFHIRSerializer({
    removeNullValues: true,
    compact: true,
    chunkSize: 1000
});

const bundleJson = serializer.serializeBundle(largeFHIRBundle);
```

### 2. Streaming Support for Large Bundles

For very large bundles, use streaming serialization:

**Before:**
```typescript
// Memory-intensive for large bundles
const hugeBundleJson = JSON.stringify(hugeFHIRBundle);
response.send(hugeBundleJson);
```

**After:**
```typescript
import { optimizedStringify } from 'fhir-models';

// Memory-efficient streaming
const stream = optimizedStringify.bundleStream(hugeFHIRBundle);
stream.pipe(response);
```

### 3. Utility Functions

Use the new utility functions for common scenarios:

**Single Resource Serialization:**
```typescript
import { optimizedStringify } from 'fhir-models';

const patientJson = optimizedStringify.resource(patient, {
    removeNullValues: true
});
```

**Bundle Serialization:**
```typescript
import { optimizedStringify } from 'fhir-models';

const bundleJson = optimizedStringify.bundle(bundle, {
    compact: true
});
```

## Migration Steps

### Step 1: Update Dependencies

Ensure you're using version 1.1.0 or higher:

```bash
npm install fhir-models@^1.1.0
```

### Step 2: Review Large Bundle Processing

If your application processes large FHIR bundles (>1000 entries), consider updating to use streaming:

```typescript
// For REST API responses
app.get('/fhir/Bundle/:id', (req, res) => {
    const bundle = getFHIRBundle(req.params.id);
    
    if (bundle.entry && bundle.entry.length > 1000) {
        // Use streaming for large bundles
        const stream = optimizedStringify.bundleStream(bundle);
        res.setHeader('Content-Type', 'application/fhir+json');
        stream.pipe(res);
    } else {
        // Standard serialization for smaller bundles
        res.json(bundle);
    }
});
```

### Step 3: Configure Serialization Options

For applications requiring specific serialization behavior:

```typescript
import { createFHIRSerializer } from 'fhir-models';

// Create application-specific serializer
const appSerializer = createFHIRSerializer({
    removeNullValues: true,    // Remove null/undefined values
    compact: true,             // Minimize whitespace
    chunkSize: 500            // Process in smaller chunks
});

// Use throughout your application
const serializedData = appSerializer.serializeResource(resource);
```

### Step 4: Update Error Handling

The optimized serialization functions return `string | Error`:

```typescript
const result = optimizedStringify.bundle(bundle);

if (result instanceof Error) {
    console.error('Serialization failed:', result.message);
    // Handle error appropriately
} else {
    // Use the serialized string
    console.log('Serialized successfully');
}
```

## Performance Considerations

### Memory Usage

- **Standard JSON.stringify:** Loads entire object into memory
- **Optimized Serialization:** Uses chunked processing to reduce peak memory usage
- **Streaming:** Processes data in small chunks, minimal memory footprint

### Throughput

Based on benchmarks with 10,000-entry bundles:
- Standard serialization: ~1.2s
- Optimized serialization: ~0.85s (29% improvement)
- Streaming: ~0.90s with constant memory usage

### When to Use Each Approach

1. **Standard `objectToJson()`:** Small to medium resources (automatically optimized)
2. **`OptimizedFHIRSerializer`:** When you need custom serialization options
3. **Streaming:** Large bundles (>1000 entries) or memory-constrained environments

## Troubleshooting

### Common Issues

1. **TypeScript Errors:** Ensure `@types/node` is installed for streaming support
2. **Memory Issues:** Use streaming for bundles >5000 entries
3. **Performance:** Enable `removeNullValues` and `compact` for optimal performance

### Debugging

Enable debug logging to monitor serialization performance:

```typescript
import { OptimizedFHIRSerializer } from 'fhir-models';

const serializer = new OptimizedFHIRSerializer();

// Monitor serialization metrics
const startTime = Date.now();
const result = serializer.serializeBundle(bundle);
const endTime = Date.now();

console.log(`Serialization completed in ${endTime - startTime}ms`);
```

## Backward Compatibility

All existing code using `objectToJson()` will continue to work without modification and will automatically benefit from the performance improvements for FHIR resources.

Non-FHIR objects will continue to use standard `JSON.stringify()` behavior.

## Support

For questions or issues related to migration, please:

1. Check the [Performance Benchmarks](./PERFORMANCE.md) documentation
2. Review [Security Considerations](./SECURITY.md)
3. File an issue on the project repository