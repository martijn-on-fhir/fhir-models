# Contributing to FHIR Models

Thank you for your interest in contributing to the FHIR Models project! This document provides guidelines for contributing to this TypeScript-based FHIR R4 model library.

## ⚠️ Important Notice

This project is currently a **proof of concept** and should not be used in production environments.

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm
- Git

### Setting up the Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/fhir-models.git
   cd fhir-models
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the project:
   ```bash
   npm run build-production
   ```

## Development Workflow

### Branch Strategy

- `main` - Main development branch
- `development` - Active development branch
- Feature branches should be created from `development`

### Making Changes

1. Create a new branch from `development`:
   ```bash
   git checkout development
   git pull origin development
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the project conventions

3. Build and test your changes:
   ```bash
   npm run build-production
   ```

4. Commit your changes using conventional commits (see below)

5. Push your branch and create a pull request

### Commit Message Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated versioning and changelog generation.

**Format:** `<type>[optional scope]: <description>`

**Types:**
- `feat`: A new feature (triggers minor version bump)
- `fix`: A bug fix (triggers patch version bump)  
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring without feature changes
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes
- `BREAKING CHANGE`: Breaking changes (triggers major version bump)

**Examples:**
```bash
git commit -m "feat: add validation decorators to Patient resource"
git commit -m "fix: resolve circular dependency in HumanName class"
git commit -m "docs: update README with usage examples"
git commit -m "feat!: change Patient constructor signature"
```

## Code Style and Standards

### TypeScript Guidelines

- Use TypeScript strict mode
- Enable experimental decorators and metadata emission
- Target ES2016
- Follow existing naming conventions
- Use class-validator decorators for validation
- Use class-transformer for object transformation

### File Structure

```
src/
├── index.ts          # Main entry point
├── r4.d.ts          # FHIR R4 type definitions
└── dist/            # Compiled output (generated)
```

### Dependencies

**Core Dependencies:**
- `class-validator` - Validation decorators
- `class-transformer` - Object transformation
- `reflect-metadata` - Decorator metadata
- `@types/fhir` - FHIR R4 type definitions

**Development Dependencies:**
- `typescript` - TypeScript compiler
- `webpack` - Module bundler
- `eslint` - Code linting
- `semantic-release` - Automated releases

## Pull Request Process

1. Ensure your branch is up to date with the target branch
2. Make sure all builds pass:
   ```bash
   npm run build-production
   ```
3. Write clear, descriptive commit messages using conventional commits
4. Create a pull request with:
   - Clear title and description
   - Reference any related issues
   - Include testing instructions if applicable

### Pull Request Requirements

- [ ] Code builds without errors
- [ ] Follows existing code conventions
- [ ] Uses conventional commit messages
- [ ] Documentation updated if needed
- [ ] No production secrets or sensitive data

## Architecture Notes

### Current Exports

The project currently exports minimal core models:
- `Patient`
- `HumanName`
- `Meta`
- `Identifier`

### Validation Approach

This project uses class-validator decorators for FHIR resource validation:
- Properties are decorated with validation rules
- Validation occurs at runtime
- Supports nested object validation

### Build Process

- **Development**: `npm run build` (TypeScript compiler with watch mode)
- **Production**: `npm run build-production` (Webpack optimized bundle)
- **Debug**: `npm run build-debug` (Webpack debug bundle)

## Automated Releases

This project uses semantic-release for automated versioning:
- Pushes to `main` trigger automated releases
- Version numbers determined by conventional commit messages
- Changelog automatically generated
- GitHub releases created automatically

## Getting Help

- Open an issue for bug reports or feature requests
- Check existing issues before creating new ones
- Provide detailed information including:
  - Steps to reproduce (for bugs)
  - Expected vs actual behavior
  - Environment details (Node.js version, OS)

## License

By contributing to this project, you agree that your contributions will be licensed under the Apache-2.0 License.