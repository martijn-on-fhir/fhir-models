"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const Patient_1 = require("../src/resources/Patient");
const Element_1 = require("../src/base/Element");
const HumanName_1 = require("../src/elements/HumanName");
describe('Core Utility Functions', () => {
    describe('jsonToObject', () => {
        it('should convert valid JSON to Patient object', () => {
            const patientJson = {
                resourceType: 'Patient',
                id: 'test-patient-1',
                active: true,
                name: [{
                        use: 'official',
                        family: 'Doe',
                        given: ['John']
                    }],
                gender: 'male'
            };
            const result = (0, index_1.jsonToObject)(Patient_1.Patient, patientJson);
            expect(result).toBeInstanceOf(Patient_1.Patient);
            expect(result.resourceType).toBe('Patient');
            expect(result.id).toBe('test-patient-1');
            expect(result.active).toBe(true);
            expect(result.gender).toBe('male');
            expect(result.name).toHaveLength(1);
        });
        it('should convert JSON to Element object', () => {
            const elementJson = {
                id: 'test-element',
                extension: []
            };
            const result = (0, index_1.jsonToObject)(Element_1.Element, elementJson);
            expect(result).toBeInstanceOf(Element_1.Element);
            expect(result.id).toBe('test-element');
        });
        it('should convert JSON to HumanName object', () => {
            const nameJson = {
                use: 'official',
                family: 'Smith',
                given: ['Jane', 'Marie'],
                prefix: ['Dr.']
            };
            const result = (0, index_1.jsonToObject)(HumanName_1.HumanName, nameJson);
            expect(result).toBeInstanceOf(HumanName_1.HumanName);
            expect(result.use).toBe('official');
            expect(result.family).toBe('Smith');
            expect(result.given).toEqual(['Jane', 'Marie']);
            expect(result.prefix).toEqual(['Dr.']);
        });
        it('should handle empty object', () => {
            const result = (0, index_1.jsonToObject)(Patient_1.Patient, {});
            expect(result).toBeInstanceOf(Patient_1.Patient);
            expect(result.resourceType).toBe('Patient');
        });
        it('should handle null input', () => {
            const result = (0, index_1.jsonToObject)(Patient_1.Patient, null);
            expect(result).toBe(null);
        });
        it('should return plain object for invalid constructor', () => {
            const result = (0, index_1.jsonToObject)(null, { test: 'data' });
            expect(result).toEqual({ test: 'data' });
            expect(result).not.toBeInstanceOf(Error);
        });
    });
    describe('objectToJson', () => {
        it('should convert Patient object to JSON string', () => {
            const patient = new Patient_1.Patient({
                id: 'test-patient-2',
                active: true,
                name: [{
                        use: 'official',
                        family: 'Johnson',
                        given: ['Bob']
                    }],
                gender: 'male'
            });
            const result = (0, index_1.objectToJson)(patient);
            expect(typeof result).toBe('string');
            expect(result).not.toBeInstanceOf(Error);
            const parsed = JSON.parse(result);
            expect(parsed.resourceType).toBe('Patient');
            expect(parsed.id).toBe('test-patient-2');
            expect(parsed.active).toBe(true);
            expect(parsed.gender).toBe('male');
        });
        it('should convert Element object to JSON string', () => {
            const element = new Element_1.Element({
                id: 'test-element-2'
            });
            const result = (0, index_1.objectToJson)(element);
            expect(typeof result).toBe('string');
            expect(result).not.toBeInstanceOf(Error);
            const parsed = JSON.parse(result);
            expect(parsed.id).toBe('test-element-2');
        });
        it('should convert HumanName object to JSON string', () => {
            const name = new HumanName_1.HumanName({
                use: 'maiden',
                family: 'Brown',
                given: ['Alice']
            });
            const result = (0, index_1.objectToJson)(name);
            expect(typeof result).toBe('string');
            expect(result).not.toBeInstanceOf(Error);
            const parsed = JSON.parse(result);
            expect(parsed.use).toBe('maiden');
            expect(parsed.family).toBe('Brown');
            expect(parsed.given).toEqual(['Alice']);
        });
        it('should handle simple objects', () => {
            const simpleObj = {
                test: 'value',
                number: 42,
                boolean: true,
                array: [1, 2, 3]
            };
            const result = (0, index_1.objectToJson)(simpleObj);
            expect(typeof result).toBe('string');
            expect(result).not.toBeInstanceOf(Error);
            const parsed = JSON.parse(result);
            expect(parsed.test).toBe('value');
            expect(parsed.number).toBe(42);
            expect(parsed.boolean).toBe(true);
            expect(parsed.array).toEqual([1, 2, 3]);
        });
        it('should handle null input', () => {
            const result = (0, index_1.objectToJson)(null);
            expect(result).toBe('null');
        });
        it('should handle undefined input', () => {
            const result = (0, index_1.objectToJson)(undefined);
            expect(result).toBe(undefined);
        });
        it('should return Error for circular references', () => {
            const circular = { name: 'test' };
            circular.self = circular;
            const result = (0, index_1.objectToJson)(circular);
            expect(result).toBeInstanceOf(Error);
        });
    });
    describe('Round-trip conversion', () => {
        it('should maintain data integrity through JSON round-trip', () => {
            const originalPatient = new Patient_1.Patient({
                id: 'round-trip-test',
                active: true,
                name: [{
                        use: 'official',
                        family: 'RoundTrip',
                        given: ['Test']
                    }],
                gender: 'other',
                birthDate: '1990-01-01'
            });
            const jsonResult = (0, index_1.objectToJson)(originalPatient);
            expect(jsonResult).not.toBeInstanceOf(Error);
            const parsedJson = JSON.parse(jsonResult);
            const reconstructedPatient = (0, index_1.jsonToObject)(Patient_1.Patient, parsedJson);
            expect(reconstructedPatient).toBeInstanceOf(Patient_1.Patient);
            const patient = reconstructedPatient;
            expect(patient.id).toBe('round-trip-test');
            expect(patient.active).toBe(true);
            expect(patient.gender).toBe('other');
            expect(patient.birthDate).toBe('1990-01-01');
            expect(patient.resourceType).toBe('Patient');
        });
    });
});
//# sourceMappingURL=core.test.js.map