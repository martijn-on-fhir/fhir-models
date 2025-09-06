# FHIR Models

A TypeScript-based FHIR R4 model library that provides TypeScript classes for FHIR resources and elements with validation using class-validator decorators.

## Overview

This library provides TypeScript classes for FHIR R4 resources and elements with built-in validation capabilities. 
It leverages decorators for validation and transformation, making it easy to work with FHIR data in TypeScript
applications. This project is part of https://github.com/martijn-on-fhir/snapshot-builder and https://github.com/martijn-on-fhir/fhir-server.

## Features

- **TypeScript Classes**: Complete FHIR R4 resources and elements with type safety
- **Validation**: Built-in validation using class-validator decorators
- **Object Transformation**: Seamless JSON conversion with class-transformer
- **Optimized Serialization**: High-performance JSON serialization for large FHIR bundles
- **Streaming Support**: Memory-efficient processing of large datasets
- **Performance**: 6-7% size reduction and chunked processing capabilities

## Installation

```bash
npm install fhir-models
```

## Usage

### Basic Usage

```typescript
import { Patient, HumanName, Reference, objectToJson, jsonToObject } from 'fhir-models';

// Create a new Patient instance
const patient = new Patient({
    name: [new HumanName({
        family: 'Schimmel',
        given: ['Martijn']
    })],
    birthDate: '1990-01-01',
    multipleBirthBoolean: true,
    generalPractitioner: [new Reference({
        display: 'Jansen',
        reference: 'Practitioner/123'
    })]
});

// Convert to JSON (automatically optimized for FHIR resources)
const json = objectToJson(patient);

// Convert from JSON to typed object
const patientFromJson = jsonToObject(Patient, jsonData);
```

### Optimized JSON Serialization

For large FHIR bundles, the library provides optimized serialization:

```typescript
import { OptimizedFHIRSerializer, optimizedStringify } from 'fhir-models';

// For large bundles - automatic optimization
const bundleJson = objectToJson(largeBundle);

// For custom serialization options
const serializer = new OptimizedFHIRSerializer({
    removeNullValues: true,
    compact: true,
    chunkSize: 1000
});
const result = serializer.serializeBundle(bundle);

// For streaming large datasets
const stream = optimizedStringify.bundleStream(hugeFHIRBundle);
stream.pipe(response);
```

### Performance Features

- **Memory Efficient**: 6-7% size reduction through null value removal
- **Streaming Support**: Handle large bundles without memory issues
- **Chunked Processing**: Configurable chunk sizes for optimal performance
- **Automatic Detection**: FHIR resources are automatically optimized

## Development

### Build Commands

- `npm run build` - Compile TypeScript with watch mode (development)
- `npm run build-production` - Build optimized production bundle
- `npm test` - Run Jest test suite
- `npm run test:coverage` - Run tests with coverage

### Architecture

- **Core Dependencies**: class-validator, class-transformer, reflect-metadata
- **TypeScript Target**: ES2016 with experimental decorators enabled
- **Build Output**: `./dist/index.js`
- **Performance**: Optimized serialization with streaming support

## Documentation

- [Migration Guide](./docs/MIGRATION.md) - Upgrade existing code
- [Performance Benchmarks](./docs/PERFORMANCE.md) - Detailed performance analysis
- [Security Considerations](./docs/SECURITY.md) - HIPAA/GDPR compliance guidelines

## Project Structure

```
src/
├── index.ts                    # Main entry point
├── serialization/             # Optimized serialization
├── base/                      # Base FHIR classes
├── elements/                  # FHIR elements
├── backbone/                  # Backbone elements
├── resources/                 # FHIR resources
└── dist/                      # Compiled output
```
