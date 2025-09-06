# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript-based FHIR R4 model library that provides TypeScript classes for FHIR resources and elements with validation using class-validator decorators. The project is currently a proof of concept and should not be used in production.

## Build Commands

- `npm run build` - Compile TypeScript with watch mode (development)
- `npm run build-production` - Build optimized production bundle with webpack
- `npm run build-debug` - Build debug bundle with webpack
- `npm test` - Currently not implemented (returns error)

## Architecture

### Core Dependencies
- **class-validator**: Used for validation decorators on FHIR model properties
- **class-transformer**: Used for object transformation and serialization
- **reflect-metadata**: Required for decorator metadata emission
- **@types/fhir**: FHIR R4 type definitions

### Project Structure
- `src/index.ts` - Main entry point exporting core models (Patient, HumanName, Meta, Identifier)
- `dist/` - Compiled output directory

### TypeScript Configuration
- Target: ES2016
- Decorators enabled (experimental decorators and metadata emission)
- Strict mode enabled
- Output directory: `./dist`
- Main entry: `./dist/index.js`

### Recent Architecture Changes
Based on git status, the codebase has undergone significant restructuring:
- Many element and resource files have been deleted from `src/elements/` and `src/resources/`
- New consolidated type definitions in `src/r4.d.ts`
- Package entry point updated to `./dist/main.js`

### Development Notes
- Uses webpack for bundling with separate production and debug configurations
- ESLint configured for code quality
- The project relies heavily on decorators for validation, so `experimentalDecorators` and `emitDecoratorMetadata` are essential
- Current exports are minimal (Patient, HumanName, Meta, Identifier) suggesting the project is in early development phase