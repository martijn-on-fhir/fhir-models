/**
 * Tests for core FHIR Models utility functions
 */

import { jsonToObject, objectToJson } from '../src/index';
import { Patient } from '../src/resources/Patient';
import { Element } from '../src/base/Element';
import { HumanName } from '../src/elements/HumanName';

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

      const result = jsonToObject(Patient, patientJson);
      
      expect(result).toBeInstanceOf(Patient);
      expect((result as Patient).resourceType).toBe('Patient');
      expect((result as Patient).id).toBe('test-patient-1');
      expect((result as Patient).active).toBe(true);
      expect((result as Patient).gender).toBe('male');
      expect((result as Patient).name).toHaveLength(1);
    });

    it('should convert JSON to Element object', () => {
      const elementJson = {
        id: 'test-element',
        extension: []
      };

      const result = jsonToObject(Element, elementJson);
      
      expect(result).toBeInstanceOf(Element);
      expect((result as Element).id).toBe('test-element');
    });

    it('should convert JSON to HumanName object', () => {
      const nameJson = {
        use: 'official',
        family: 'Smith',
        given: ['Jane', 'Marie'],
        prefix: ['Dr.']
      };

      const result = jsonToObject(HumanName, nameJson);
      
      expect(result).toBeInstanceOf(HumanName);
      expect((result as HumanName).use).toBe('official');
      expect((result as HumanName).family).toBe('Smith');
      expect((result as HumanName).given).toEqual(['Jane', 'Marie']);
      expect((result as HumanName).prefix).toEqual(['Dr.']);
    });

    it('should handle empty object', () => {
      const result = jsonToObject(Patient, {});
      
      expect(result).toBeInstanceOf(Patient);
      expect((result as Patient).resourceType).toBe('Patient');
    });

    it('should handle null input', () => {
      const result = jsonToObject(Patient, null);
      
      // plainToInstance returns null when input is null
      expect(result).toBe(null);
    });

    it('should return plain object for invalid constructor', () => {
      const result = jsonToObject(null as any, { test: 'data' });
      
      // When constructor is null, plainToInstance just returns the original object
      expect(result).toEqual({ test: 'data' });
      expect(result).not.toBeInstanceOf(Error);
    });
  });

  describe('objectToJson', () => {
    it('should convert Patient object to JSON string', () => {
      const patient = new Patient({
        id: 'test-patient-2',
        active: true,
        name: [{
          use: 'official',
          family: 'Johnson',
          given: ['Bob']
        } as any],
        gender: 'male'
      });

      const result = objectToJson(patient);
      
      expect(typeof result).toBe('string');
      expect(result).not.toBeInstanceOf(Error);
      
      const parsed = JSON.parse(result as string);
      expect(parsed.resourceType).toBe('Patient');
      expect(parsed.id).toBe('test-patient-2');
      expect(parsed.active).toBe(true);
      expect(parsed.gender).toBe('male');
    });

    it('should convert Element object to JSON string', () => {
      const element = new Element({
        id: 'test-element-2'
      });

      const result = objectToJson(element);
      
      expect(typeof result).toBe('string');
      expect(result).not.toBeInstanceOf(Error);
      
      const parsed = JSON.parse(result as string);
      expect(parsed.id).toBe('test-element-2');
    });

    it('should convert HumanName object to JSON string', () => {
      const name = new HumanName({
        use: 'maiden',
        family: 'Brown',
        given: ['Alice']
      });

      const result = objectToJson(name);
      
      expect(typeof result).toBe('string');
      expect(result).not.toBeInstanceOf(Error);
      
      const parsed = JSON.parse(result as string);
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

      const result = objectToJson(simpleObj);
      
      expect(typeof result).toBe('string');
      expect(result).not.toBeInstanceOf(Error);
      
      const parsed = JSON.parse(result as string);
      expect(parsed.test).toBe('value');
      expect(parsed.number).toBe(42);
      expect(parsed.boolean).toBe(true);
      expect(parsed.array).toEqual([1, 2, 3]);
    });

    it('should handle null input', () => {
      const result = objectToJson(null);
      
      expect(result).toBe('null');
    });

    it('should handle undefined input', () => {
      const result = objectToJson(undefined);
      
      expect(result).toBe(undefined); // JSON.stringify returns undefined for undefined
    });

    it('should return Error for circular references', () => {
      const circular: any = { name: 'test' };
      circular.self = circular;

      const result = objectToJson(circular);
      
      expect(result).toBeInstanceOf(Error);
    });
  });

  describe('Round-trip conversion', () => {
    it('should maintain data integrity through JSON round-trip', () => {
      const originalPatient = new Patient({
        id: 'round-trip-test',
        active: true,
        name: [{
          use: 'official',
          family: 'RoundTrip',
          given: ['Test']
        } as any],
        gender: 'other',
        birthDate: '1990-01-01'
      });

      // Convert to JSON
      const jsonResult = objectToJson(originalPatient);
      expect(jsonResult).not.toBeInstanceOf(Error);
      
      // Parse JSON back to object
      const parsedJson = JSON.parse(jsonResult as string);
      
      // Convert back to Patient object
      const reconstructedPatient = jsonToObject(Patient, parsedJson);
      expect(reconstructedPatient).toBeInstanceOf(Patient);
      
      // Verify all properties are preserved
      const patient = reconstructedPatient as Patient;
      expect(patient.id).toBe('round-trip-test');
      expect(patient.active).toBe(true);
      expect(patient.gender).toBe('other');
      expect(patient.birthDate).toBe('1990-01-01');
      expect(patient.resourceType).toBe('Patient');
    });
  });
});