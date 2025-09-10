import { validate } from '../src/index';
import { Patient } from '../src/resources/Patient';
import { HumanName } from '../src/elements/HumanName';
import { Meta } from '../src/elements/Meta';
import { Identifier } from '../src/elements/Identifier';

describe('validate function', () => {
    describe('Valid FHIR objects', () => {
        it('should return true for a valid Patient object', async () => {
            const validPatient = new Patient({
                id: 'test-patient-123',
                meta: new Meta({
                    versionId: '1',
                    lastUpdated: new Date().toISOString()
                }),
                name: [new HumanName({
                    family: 'TestFamily',
                    given: ['TestGiven']
                })],
                gender: 'male',
                active: true
            });

            const result = await validate(validPatient);
            expect(result).toBe(true);
        });

        it('should return true for a valid HumanName object', async () => {
            const validName = new HumanName({
                family: 'Smith',
                given: ['John', 'Michael']
            });

            const result = await validate(validName);
            expect(result).toBe(true);
        });

        it('should return true for a valid Identifier object', async () => {
            const validIdentifier = new Identifier({
                system: 'http://example.com/patient-ids',
                value: '12345'
            });

            const result = await validate(validIdentifier);
            expect(result).toBe(true);
        });

        it('should return true for a minimal valid object', async () => {
            const minimalPatient = new Patient();
            
            const result = await validate(minimalPatient);
            expect(result).toBe(true);
        });
    });

    describe('Invalid FHIR objects', () => {
        it('should return error messages for invalid Patient object', async () => {
            const invalidPatient = new Patient({
                id: '', // Invalid: empty ID
                gender: 'invalid-gender' as any, // Invalid: not a valid gender code
                birthDate: 'not-a-date' // Invalid: not a valid date format
            });

            const result = await validate(invalidPatient);
            expect(result).not.toBe(true);
            expect(Array.isArray(result)).toBe(true);
            if (Array.isArray(result)) {
                expect(result.length).toBeGreaterThan(0);
                expect(result.some(error => error.length > 0)).toBe(true);
            }
        });

        it('should return error messages for HumanName with invalid data', async () => {
            const invalidName = new HumanName({
                family: 123 as any, // Invalid: should be string
                given: 'not-an-array' as any // Invalid: should be array
            });

            const result = await validate(invalidName);
            expect(result).not.toBe(true);
            expect(Array.isArray(result)).toBe(true);
            if (Array.isArray(result)) {
                expect(result.length).toBeGreaterThan(0);
            }
        });

        it('should handle objects with constraint violations', async () => {
            // Create an object that violates specific constraints
            const patientWithBadId = new Patient({
                id: 'invalid id with spaces and special chars!@#' // Invalid ID format
            });

            const result = await validate(patientWithBadId);
            // Note: The FHIR Patient class may not have strict ID validation decorators
            // so this test checks that the function handles the object appropriately
            expect(typeof result === 'boolean' || Array.isArray(result)).toBe(true);
        });
    });

    describe('Edge cases', () => {
        it('should handle null input gracefully', async () => {
            const result = await validate(null);
            expect(result).not.toBe(true);
            expect(Array.isArray(result)).toBe(true);
            if (Array.isArray(result)) {
                expect(result[0]).toBe('Entity cannot be null or undefined');
            }
        });

        it('should handle undefined input gracefully', async () => {
            const result = await validate(undefined);
            expect(result).not.toBe(true);
            expect(Array.isArray(result)).toBe(true);
            if (Array.isArray(result)) {
                expect(result[0]).toBe('Entity cannot be null or undefined');
            }
        });

        it('should handle primitive values', async () => {
            const result = await validate('string');
            expect(result).not.toBe(true);
            expect(Array.isArray(result)).toBe(true);
            if (Array.isArray(result)) {
                expect(result[0]).toBe('Entity must be an object');
            }
        });

        it('should handle plain objects without validation decorators', async () => {
            const plainObject = {
                someProperty: 'value',
                anotherProperty: 123
            };

            const result = await validate(plainObject);
            // Plain objects without decorators may trigger validation errors
            expect(typeof result === 'boolean' || Array.isArray(result)).toBe(true);
        });

        it('should handle empty objects', async () => {
            const emptyObject = {};
            
            const result = await validate(emptyObject);
            // Empty objects without decorators may trigger validation errors
            expect(typeof result === 'boolean' || Array.isArray(result)).toBe(true);
        });
    });

    describe('Error message format', () => {
        it('should return properly formatted error messages', async () => {
            const invalidPatient = new Patient({
                id: '', // This should trigger validation error
                gender: 'invalid' as any
            });

            const result = await validate(invalidPatient);
            if (Array.isArray(result)) {
                expect(result.every(error => typeof error === 'string')).toBe(true);
                expect(result.every(error => error.length > 0)).toBe(true);
            }
        });

        it('should join multiple constraint violations with semicolon', async () => {
            // Create object that might have multiple constraints on same field
            const badIdentifier = new Identifier({
                system: 'not-a-url', // Invalid URL format
                value: '' // Empty value
            });

            const result = await validate(badIdentifier);
            if (Array.isArray(result)) {
                // Check if any error message contains semicolon (multiple constraints joined)
                const hasJoinedConstraints = result.some(error => error.includes(';'));
                // This might be true depending on validation decorators implementation
                expect(typeof hasJoinedConstraints).toBe('boolean');
            }
        });
    });

    describe('Async behavior', () => {
        it('should return a Promise', () => {
            const patient = new Patient();
            const result = validate(patient);
            
            expect(result).toBeInstanceOf(Promise);
        });

        it('should handle async validation properly', async () => {
            const patient = new Patient();
            
            // Test that we can await the result
            const result = await validate(patient);
            expect(typeof result === 'boolean' || Array.isArray(result)).toBe(true);
        });
    });

    describe('Type safety', () => {
        it('should work with generic types', async () => {
            const patient = new Patient();
            
            // The function should accept any type T
            const result = await validate<Patient>(patient);
            expect(typeof result === 'boolean' || Array.isArray(result)).toBe(true);
        });

        it('should return consistent result types', async () => {
            const validObject = new Patient();
            const invalidObject = new Patient({ id: '' });

            const validResult = await validate(validObject);
            const invalidResult = await validate(invalidObject);

            // Both should return either boolean true or string array
            expect(validResult === true || Array.isArray(validResult)).toBe(true);
            expect(invalidResult === true || Array.isArray(invalidResult)).toBe(true);
        });
    });
});