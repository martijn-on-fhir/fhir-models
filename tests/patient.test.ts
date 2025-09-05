/**
 * Tests for Patient FHIR resource class
 */

import { validate } from 'class-validator';
import { Patient } from '../src/resources/Patient';
import { HumanName } from '../src/elements/HumanName';
import { Identifier } from '../src/elements/Identifier';
import { ContactPoint } from '../src/elements/ContactPoint';
import { Address } from '../src/elements/Address';
import { CodeableConcept } from '../src/elements/CodeableConcept';
import { Reference } from '../src/elements/Reference';
import { Element } from '../src/base/Element';

describe('Patient Class', () => {
  
  describe('Constructor', () => {
    it('should create a Patient with default resourceType', () => {
      const patient = new Patient();
      
      expect(patient.resourceType).toBe('Patient');
      expect(patient).toBeInstanceOf(Patient);
    });

    it('should create a Patient with provided data', () => {
      const patientData = {
        id: 'patient-123',
        active: true,
        gender: 'female' as const,
        birthDate: '1985-06-15'
      };

      const patient = new Patient(patientData);
      
      expect(patient.id).toBe('patient-123');
      expect(patient.active).toBe(true);
      expect(patient.gender).toBe('female');
      expect(patient.birthDate).toBe('1985-06-15');
      expect(patient.resourceType).toBe('Patient');
    });
  });

  describe('Basic Properties', () => {
    let patient: Patient;

    beforeEach(() => {
      patient = new Patient();
    });

    it('should handle active property', () => {
      patient.active = true;
      expect(patient.active).toBe(true);

      patient.active = false;
      expect(patient.active).toBe(false);
    });

    it('should handle gender property with valid values', () => {
      patient.gender = 'male';
      expect(patient.gender).toBe('male');

      patient.gender = 'female';
      expect(patient.gender).toBe('female');

      patient.gender = 'other';
      expect(patient.gender).toBe('other');

      patient.gender = 'unknown';
      expect(patient.gender).toBe('unknown');
    });

    it('should handle birthDate property', () => {
      patient.birthDate = '1990-12-25';
      expect(patient.birthDate).toBe('1990-12-25');
    });

    it('should handle deceased properties', () => {
      patient.deceasedBoolean = true;
      expect(patient.deceasedBoolean).toBe(true);

      patient.deceasedDateTime = '2023-01-01T12:00:00Z';
      expect(patient.deceasedDateTime).toBe('2023-01-01T12:00:00Z');
    });

    it('should handle multipleBirth properties', () => {
      patient.multipleBirthBoolean = true;
      expect(patient.multipleBirthBoolean).toBe(true);

      patient.multipleBirthInteger = 2;
      expect(patient.multipleBirthInteger).toBe(2);
    });
  });

  describe('Complex Properties', () => {
    let patient: Patient;

    beforeEach(() => {
      patient = new Patient();
    });

    it('should handle name array', () => {
      const name1 = new HumanName({
        use: 'official',
        family: 'Doe',
        given: ['John', 'Michael']
      });

      const name2 = new HumanName({
        use: 'nickname',
        given: ['Johnny']
      });

      patient.name = [name1, name2];
      
      expect(patient.name).toHaveLength(2);
      expect(patient.name![0].family).toBe('Doe');
      expect(patient.name![0].given).toEqual(['John', 'Michael']);
      expect(patient.name![1].use).toBe('nickname');
    });

    it('should handle identifier array', () => {
      const identifier1 = new Identifier({
        system: 'http://hospital.example.org',
        value: '12345'
      });

      const identifier2 = new Identifier({
        system: 'http://national-id.example.org',
        value: 'SSN123456789'
      });

      patient.identifier = [identifier1, identifier2];
      
      expect(patient.identifier).toHaveLength(2);
      expect(patient.identifier![0].system).toBe('http://hospital.example.org');
      expect(patient.identifier![1].value).toBe('SSN123456789');
    });

    it('should handle telecom array', () => {
      const phone = new ContactPoint({
        system: 'phone',
        value: '+1-555-123-4567',
        use: 'home'
      });

      const email = new ContactPoint({
        system: 'email',
        value: 'john.doe@example.com',
        use: 'work'
      });

      patient.telecom = [phone, email];
      
      expect(patient.telecom).toHaveLength(2);
      expect(patient.telecom![0].system).toBe('phone');
      expect(patient.telecom![1].system).toBe('email');
    });

    it('should handle address array', () => {
      const homeAddress = new Address({
        use: 'home',
        line: ['123 Main St'],
        city: 'Anytown',
        state: 'NY',
        postalCode: '12345',
        country: 'US'
      });

      patient.address = [homeAddress];
      
      expect(patient.address).toHaveLength(1);
      expect(patient.address![0].city).toBe('Anytown');
      expect(patient.address![0].line).toEqual(['123 Main St']);
    });

    it('should handle maritalStatus', () => {
      const maritalStatus = new CodeableConcept({
        coding: [{
          system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
          code: 'M',
          display: 'Married'
        }]
      });

      patient.maritalStatus = maritalStatus;
      
      expect(patient.maritalStatus).toBe(maritalStatus);
      expect(patient.maritalStatus!.coding![0].code).toBe('M');
    });

    it('should handle managingOrganization', () => {
      const organization = new Reference({
        reference: 'Organization/123',
        display: 'Example Hospital'
      });

      patient.managingOrganization = organization;
      
      expect(patient.managingOrganization).toBe(organization);
      expect(patient.managingOrganization!.reference).toBe('Organization/123');
    });

    it('should handle generalPractitioner array', () => {
      const gp1 = new Reference({
        reference: 'Practitioner/dr-smith',
        display: 'Dr. Smith'
      });

      const gp2 = new Reference({
        reference: 'Practitioner/dr-jones',
        display: 'Dr. Jones'
      });

      patient.generalPractitioner = [gp1, gp2];
      
      expect(patient.generalPractitioner).toHaveLength(2);
      expect(patient.generalPractitioner![0].display).toBe('Dr. Smith');
      expect(patient.generalPractitioner![1].display).toBe('Dr. Jones');
    });
  });

  describe('Extension Properties', () => {
    it('should handle primitive extension properties', () => {
      const patient = new Patient();
      
      const activeExtension = new Element({
        extension: [{
          url: 'http://example.org/active-reason',
          valueString: 'Patient confirmed active status'
        }]
      });

      patient._active = activeExtension;
      expect(patient._active).toBe(activeExtension);

      const genderExtension = new Element({
        extension: [{
          url: 'http://example.org/gender-identity',
          valueString: 'non-binary'
        }]
      });

      patient._gender = genderExtension;
      expect(patient._gender).toBe(genderExtension);
    });
  });

  describe('Validation', () => {
    it('should validate a valid Patient', async () => {
      const patient = new Patient({
        id: 'valid-patient',
        active: true,
        gender: 'male',
        birthDate: '1980-01-01'
      });

      const errors = await validate(patient);
      expect(errors).toHaveLength(0);
    });

    it('should reject invalid gender values', async () => {
      const patient = new Patient();
      (patient as any).gender = 'invalid-gender';

      const errors = await validate(patient);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].property).toBe('gender');
    });

    it('should reject invalid multipleBirthInteger', async () => {
      const patient = new Patient();
      patient.multipleBirthInteger = -1; // Should be minimum 1

      const errors = await validate(patient);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].property).toBe('multipleBirthInteger');
    });

    it('should accept valid multipleBirthInteger', async () => {
      const patient = new Patient();
      patient.multipleBirthInteger = 3;

      const errors = await validate(patient);
      expect(errors).toHaveLength(0);
    });
  });

  describe('Real-world scenarios', () => {
    it('should handle a complete patient record', () => {
      const patient = new Patient({
        id: 'patient-complete-example',
        active: true,
        identifier: [{
          system: 'http://hospital.example.org/patient-id',
          value: 'HOSP-12345'
        } as any],
        name: [{
          use: 'official',
          family: 'Patient',
          given: ['Example', 'Test'],
          prefix: ['Mr.']
        } as any],
        telecom: [{
          system: 'phone',
          value: '555-0123',
          use: 'home'
        } as any, {
          system: 'email',
          value: 'example.patient@test.com'
        } as any],
        gender: 'male',
        birthDate: '1974-12-25',
        address: [{
          use: 'home',
          line: ['534 Erewhon St'],
          city: 'PleasantVille',
          state: 'Vic',
          postalCode: '3999'
        } as any],
        maritalStatus: {
          coding: [{
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
            code: 'M'
          }]
        } as any,
        managingOrganization: {
          reference: 'Organization/example-hospital'
        } as any
      });

      expect(patient.resourceType).toBe('Patient');
      expect(patient.id).toBe('patient-complete-example');
      expect(patient.active).toBe(true);
      expect(patient.name![0].family).toBe('Patient');
      expect(patient.telecom).toHaveLength(2);
      expect(patient.address![0].city).toBe('PleasantVille');
    });

    it('should handle minimal patient record', () => {
      const patient = new Patient();

      expect(patient.resourceType).toBe('Patient');
      expect(patient.active).toBeUndefined();
      expect(patient.name).toBeUndefined();
      expect(patient.gender).toBeUndefined();
    });
  });

  describe('Serialization', () => {
    it('should serialize to JSON correctly', () => {
      const patient = new Patient({
        id: 'serialize-test',
        active: true,
        gender: 'female',
        name: [{
          family: 'Serialization',
          given: ['Test']
        } as any]
      });

      const json = JSON.stringify(patient);
      const parsed = JSON.parse(json);

      expect(parsed.resourceType).toBe('Patient');
      expect(parsed.id).toBe('serialize-test');
      expect(parsed.active).toBe(true);
      expect(parsed.gender).toBe('female');
      expect(parsed.name[0].family).toBe('Serialization');
    });
  });
});