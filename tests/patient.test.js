"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const Patient_1 = require("../src/resources/Patient");
const HumanName_1 = require("../src/elements/HumanName");
const Identifier_1 = require("../src/elements/Identifier");
const ContactPoint_1 = require("../src/elements/ContactPoint");
const Address_1 = require("../src/elements/Address");
const CodeableConcept_1 = require("../src/elements/CodeableConcept");
const Reference_1 = require("../src/elements/Reference");
const Element_1 = require("../src/base/Element");
describe('Patient Class', () => {
    describe('Constructor', () => {
        it('should create a Patient with default resourceType', () => {
            const patient = new Patient_1.Patient();
            expect(patient.resourceType).toBe('Patient');
            expect(patient).toBeInstanceOf(Patient_1.Patient);
        });
        it('should create a Patient with provided data', () => {
            const patientData = {
                id: 'patient-123',
                active: true,
                gender: 'female',
                birthDate: '1985-06-15'
            };
            const patient = new Patient_1.Patient(patientData);
            expect(patient.id).toBe('patient-123');
            expect(patient.active).toBe(true);
            expect(patient.gender).toBe('female');
            expect(patient.birthDate).toBe('1985-06-15');
            expect(patient.resourceType).toBe('Patient');
        });
    });
    describe('Basic Properties', () => {
        let patient;
        beforeEach(() => {
            patient = new Patient_1.Patient();
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
        let patient;
        beforeEach(() => {
            patient = new Patient_1.Patient();
        });
        it('should handle name array', () => {
            const name1 = new HumanName_1.HumanName({
                use: 'official',
                family: 'Doe',
                given: ['John', 'Michael']
            });
            const name2 = new HumanName_1.HumanName({
                use: 'nickname',
                given: ['Johnny']
            });
            patient.name = [name1, name2];
            expect(patient.name).toHaveLength(2);
            expect(patient.name[0].family).toBe('Doe');
            expect(patient.name[0].given).toEqual(['John', 'Michael']);
            expect(patient.name[1].use).toBe('nickname');
        });
        it('should handle identifier array', () => {
            const identifier1 = new Identifier_1.Identifier({
                system: 'http://hospital.example.org',
                value: '12345'
            });
            const identifier2 = new Identifier_1.Identifier({
                system: 'http://national-id.example.org',
                value: 'SSN123456789'
            });
            patient.identifier = [identifier1, identifier2];
            expect(patient.identifier).toHaveLength(2);
            expect(patient.identifier[0].system).toBe('http://hospital.example.org');
            expect(patient.identifier[1].value).toBe('SSN123456789');
        });
        it('should handle telecom array', () => {
            const phone = new ContactPoint_1.ContactPoint({
                system: 'phone',
                value: '+1-555-123-4567',
                use: 'home'
            });
            const email = new ContactPoint_1.ContactPoint({
                system: 'email',
                value: 'john.doe@example.com',
                use: 'work'
            });
            patient.telecom = [phone, email];
            expect(patient.telecom).toHaveLength(2);
            expect(patient.telecom[0].system).toBe('phone');
            expect(patient.telecom[1].system).toBe('email');
        });
        it('should handle address array', () => {
            const homeAddress = new Address_1.Address({
                use: 'home',
                line: ['123 Main St'],
                city: 'Anytown',
                state: 'NY',
                postalCode: '12345',
                country: 'US'
            });
            patient.address = [homeAddress];
            expect(patient.address).toHaveLength(1);
            expect(patient.address[0].city).toBe('Anytown');
            expect(patient.address[0].line).toEqual(['123 Main St']);
        });
        it('should handle maritalStatus', () => {
            const maritalStatus = new CodeableConcept_1.CodeableConcept({
                coding: [{
                        system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
                        code: 'M',
                        display: 'Married'
                    }]
            });
            patient.maritalStatus = maritalStatus;
            expect(patient.maritalStatus).toBe(maritalStatus);
            expect(patient.maritalStatus.coding[0].code).toBe('M');
        });
        it('should handle managingOrganization', () => {
            const organization = new Reference_1.Reference({
                reference: 'Organization/123',
                display: 'Example Hospital'
            });
            patient.managingOrganization = organization;
            expect(patient.managingOrganization).toBe(organization);
            expect(patient.managingOrganization.reference).toBe('Organization/123');
        });
        it('should handle generalPractitioner array', () => {
            const gp1 = new Reference_1.Reference({
                reference: 'Practitioner/dr-smith',
                display: 'Dr. Smith'
            });
            const gp2 = new Reference_1.Reference({
                reference: 'Practitioner/dr-jones',
                display: 'Dr. Jones'
            });
            patient.generalPractitioner = [gp1, gp2];
            expect(patient.generalPractitioner).toHaveLength(2);
            expect(patient.generalPractitioner[0].display).toBe('Dr. Smith');
            expect(patient.generalPractitioner[1].display).toBe('Dr. Jones');
        });
    });
    describe('Extension Properties', () => {
        it('should handle primitive extension properties', () => {
            const patient = new Patient_1.Patient();
            const activeExtension = new Element_1.Element({
                extension: [{
                        url: 'http://example.org/active-reason',
                        valueString: 'Patient confirmed active status'
                    }]
            });
            patient._active = activeExtension;
            expect(patient._active).toBe(activeExtension);
            const genderExtension = new Element_1.Element({
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
        it('should validate a valid Patient', () => __awaiter(void 0, void 0, void 0, function* () {
            const patient = new Patient_1.Patient({
                id: 'valid-patient',
                active: true,
                gender: 'male',
                birthDate: '1980-01-01'
            });
            const errors = yield (0, class_validator_1.validate)(patient);
            expect(errors).toHaveLength(0);
        }));
        it('should reject invalid gender values', () => __awaiter(void 0, void 0, void 0, function* () {
            const patient = new Patient_1.Patient();
            patient.gender = 'invalid-gender';
            const errors = yield (0, class_validator_1.validate)(patient);
            expect(errors.length).toBeGreaterThan(0);
            expect(errors[0].property).toBe('gender');
        }));
        it('should reject invalid multipleBirthInteger', () => __awaiter(void 0, void 0, void 0, function* () {
            const patient = new Patient_1.Patient();
            patient.multipleBirthInteger = -1;
            const errors = yield (0, class_validator_1.validate)(patient);
            expect(errors.length).toBeGreaterThan(0);
            expect(errors[0].property).toBe('multipleBirthInteger');
        }));
        it('should accept valid multipleBirthInteger', () => __awaiter(void 0, void 0, void 0, function* () {
            const patient = new Patient_1.Patient();
            patient.multipleBirthInteger = 3;
            const errors = yield (0, class_validator_1.validate)(patient);
            expect(errors).toHaveLength(0);
        }));
    });
    describe('Real-world scenarios', () => {
        it('should handle a complete patient record', () => {
            const patient = new Patient_1.Patient({
                id: 'patient-complete-example',
                active: true,
                identifier: [{
                        system: 'http://hospital.example.org/patient-id',
                        value: 'HOSP-12345'
                    }],
                name: [{
                        use: 'official',
                        family: 'Patient',
                        given: ['Example', 'Test'],
                        prefix: ['Mr.']
                    }],
                telecom: [{
                        system: 'phone',
                        value: '555-0123',
                        use: 'home'
                    }, {
                        system: 'email',
                        value: 'example.patient@test.com'
                    }],
                gender: 'male',
                birthDate: '1974-12-25',
                address: [{
                        use: 'home',
                        line: ['534 Erewhon St'],
                        city: 'PleasantVille',
                        state: 'Vic',
                        postalCode: '3999'
                    }],
                maritalStatus: {
                    coding: [{
                            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
                            code: 'M'
                        }]
                },
                managingOrganization: {
                    reference: 'Organization/example-hospital'
                }
            });
            expect(patient.resourceType).toBe('Patient');
            expect(patient.id).toBe('patient-complete-example');
            expect(patient.active).toBe(true);
            expect(patient.name[0].family).toBe('Patient');
            expect(patient.telecom).toHaveLength(2);
            expect(patient.address[0].city).toBe('PleasantVille');
        });
        it('should handle minimal patient record', () => {
            const patient = new Patient_1.Patient();
            expect(patient.resourceType).toBe('Patient');
            expect(patient.active).toBeUndefined();
            expect(patient.name).toBeUndefined();
            expect(patient.gender).toBeUndefined();
        });
    });
    describe('Serialization', () => {
        it('should serialize to JSON correctly', () => {
            const patient = new Patient_1.Patient({
                id: 'serialize-test',
                active: true,
                gender: 'female',
                name: [{
                        family: 'Serialization',
                        given: ['Test']
                    }]
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
//# sourceMappingURL=patient.test.js.map