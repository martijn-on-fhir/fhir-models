# FHIR Models

A TypeScript-based FHIR R4 model library that provides TypeScript classes for FHIR resources and elements with validation using class-validator decorators.

## Overview

This library provides TypeScript classes for FHIR R4 resources and elements with built-in validation capabilities. 
It leverages decorators for validation and transformation, making it easy to work with FHIR data in TypeScript
applications. This project is part of https://github.com/martijn-on-fhir/snapshot-builder and https://github.com/martijn-on-fhir/fhir-server.

## Features

- TypeScript classes for FHIR R4 resources and elements
- Validation using class-validator decorators
- Object transformation with class-transformer
- Type-safe FHIR model definitions

## Installation

```bash
npm install fhir-models
```

## Usage

```typescript
import { Patient} from './dist/main.js';

const patient = new Patient();


const pat = new Patient({
    name: [new HumanName({
        family: 'Schimmel',
        given: ['Martijn']
    })],
    birthDate: '1990-01-01',
    multipleBirthBoolean: true,
    generalPractitioner: [new Reference({
        display: 'Jansen',
        reference: 'Pratitioner/123'
    })]
})
```

## Development

### Build Commands

- `npm run build` - Compile TypeScript with watch mode (development)
- `npm run build-production` - Build optimized production bundle with webpack
- `npm run build-debug` - Build debug bundle with webpack

### Architecture

- **Core Dependencies**: class-validator, class-transformer, reflect-metadata, @types/fhir
- **TypeScript Target**: ES2016 with experimental decorators enabled
- **Build Output**: `./dist/main.js`

## Project Structure

```
src/
├── index.ts          # Main entry point
└── dist/            # Compiled output
```
