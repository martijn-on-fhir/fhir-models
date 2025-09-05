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
const HumanName_1 = require("../src/elements/HumanName");
const Identifier_1 = require("../src/elements/Identifier");
const ContactPoint_1 = require("../src/elements/ContactPoint");
const Address_1 = require("../src/elements/Address");
const CodeableConcept_1 = require("../src/elements/CodeableConcept");
const Coding_1 = require("../src/elements/Coding");
const Reference_1 = require("../src/elements/Reference");
const Extension_1 = require("../src/elements/Extension");
const Meta_1 = require("../src/elements/Meta");
describe('Element Classes', () => {
    describe('HumanName Class', () => {
        it('should create a HumanName with default constructor', () => {
            const name = new HumanName_1.HumanName();
            expect(name).toBeInstanceOf(HumanName_1.HumanName);
            expect(name.use).toBeUndefined();
            expect(name.family).toBeUndefined();
            expect(name.given).toBeUndefined();
        });
        it('should create a HumanName with data', () => {
            const data = {
                use: 'official',
                family: 'Smith',
                given: ['John', 'Michael'],
                prefix: ['Mr.'],
                suffix: ['Jr.'],
                period: {
                    start: '2000-01-01'
                }
            };
            const name = new HumanName_1.HumanName(data);
            expect(name.use).toBe('official');
            expect(name.family).toBe('Smith');
            expect(name.given).toEqual(['John', 'Michael']);
            expect(name.prefix).toEqual(['Mr.']);
            expect(name.suffix).toEqual(['Jr.']);
        });
        it('should validate valid use values', () => __awaiter(void 0, void 0, void 0, function* () {
            const validUses = ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden'];
            for (const use of validUses) {
                const name = new HumanName_1.HumanName({ use: use });
                const errors = yield (0, class_validator_1.validate)(name);
                expect(errors).toHaveLength(0);
            }
        }));
        it('should reject invalid use values', () => __awaiter(void 0, void 0, void 0, function* () {
            const name = new HumanName_1.HumanName();
            name.use = 'invalid-use';
            const errors = yield (0, class_validator_1.validate)(name);
            expect(errors.length).toBeGreaterThan(0);
            expect(errors[0].property).toBe('use');
        }));
    });
    describe('Identifier Class', () => {
        it('should create an Identifier', () => {
            const identifier = new Identifier_1.Identifier({
                system: 'http://example.org/patient-ids',
                value: '12345'
            });
            expect(identifier.system).toBe('http://example.org/patient-ids');
            expect(identifier.value).toBe('12345');
        });
        it('should handle all identifier properties', () => {
            const identifier = new Identifier_1.Identifier({
                use: 'official',
                type: {
                    coding: [{
                            system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                            code: 'MR'
                        }]
                },
                system: 'http://hospital.example.org',
                value: 'HOSP12345',
                period: {
                    start: '2020-01-01'
                },
                assigner: {
                    reference: 'Organization/hospital'
                }
            });
            expect(identifier.use).toBe('official');
            expect(identifier.system).toBe('http://hospital.example.org');
            expect(identifier.value).toBe('HOSP12345');
        });
        it('should validate valid use values', () => __awaiter(void 0, void 0, void 0, function* () {
            const validUses = ['usual', 'official', 'temp', 'secondary', 'old'];
            for (const use of validUses) {
                const identifier = new Identifier_1.Identifier({ use: use });
                const errors = yield (0, class_validator_1.validate)(identifier);
                expect(errors).toHaveLength(0);
            }
        }));
    });
    describe('ContactPoint Class', () => {
        it('should create a ContactPoint', () => {
            const contactPoint = new ContactPoint_1.ContactPoint({
                system: 'phone',
                value: '555-0123'
            });
            expect(contactPoint.system).toBe('phone');
            expect(contactPoint.value).toBe('555-0123');
        });
        it('should handle all ContactPoint properties', () => {
            const contactPoint = new ContactPoint_1.ContactPoint({
                system: 'email',
                value: 'test@example.com',
                use: 'work',
                rank: 1,
                period: {
                    start: '2023-01-01'
                }
            });
            expect(contactPoint.system).toBe('email');
            expect(contactPoint.use).toBe('work');
            expect(contactPoint.rank).toBe(1);
        });
        it('should validate valid system values', () => __awaiter(void 0, void 0, void 0, function* () {
            const validSystems = ['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'];
            for (const system of validSystems) {
                const contactPoint = new ContactPoint_1.ContactPoint({ system: system });
                const errors = yield (0, class_validator_1.validate)(contactPoint);
                expect(errors).toHaveLength(0);
            }
        }));
        it('should validate valid use values', () => __awaiter(void 0, void 0, void 0, function* () {
            const validUses = ['home', 'work', 'temp', 'old', 'mobile'];
            for (const use of validUses) {
                const contactPoint = new ContactPoint_1.ContactPoint({ use: use });
                const errors = yield (0, class_validator_1.validate)(contactPoint);
                expect(errors).toHaveLength(0);
            }
        }));
    });
    describe('Address Class', () => {
        it('should create an Address', () => {
            const address = new Address_1.Address({
                line: ['123 Main St'],
                city: 'Anytown',
                state: 'NY',
                postalCode: '12345',
                country: 'US'
            });
            expect(address.line).toEqual(['123 Main St']);
            expect(address.city).toBe('Anytown');
            expect(address.state).toBe('NY');
            expect(address.postalCode).toBe('12345');
            expect(address.country).toBe('US');
        });
        it('should handle all Address properties', () => {
            const address = new Address_1.Address({
                use: 'home',
                type: 'physical',
                text: '123 Main Street, Anytown, NY 12345',
                line: ['123 Main Street', 'Apt 4B'],
                city: 'Anytown',
                district: 'District 1',
                state: 'NY',
                postalCode: '12345-6789',
                country: 'United States',
                period: {
                    start: '2020-01-01'
                }
            });
            expect(address.use).toBe('home');
            expect(address.type).toBe('physical');
            expect(address.line).toEqual(['123 Main Street', 'Apt 4B']);
            expect(address.district).toBe('District 1');
        });
        it('should validate valid use values', () => __awaiter(void 0, void 0, void 0, function* () {
            const validUses = ['home', 'work', 'temp', 'old', 'billing'];
            for (const use of validUses) {
                const address = new Address_1.Address({ use: use });
                const errors = yield (0, class_validator_1.validate)(address);
                expect(errors).toHaveLength(0);
            }
        }));
        it('should validate valid type values', () => __awaiter(void 0, void 0, void 0, function* () {
            const validTypes = ['postal', 'physical', 'both'];
            for (const type of validTypes) {
                const address = new Address_1.Address({ type: type });
                const errors = yield (0, class_validator_1.validate)(address);
                expect(errors).toHaveLength(0);
            }
        }));
    });
    describe('Coding Class', () => {
        it('should create a Coding', () => {
            const coding = new Coding_1.Coding({
                system: 'http://loinc.org',
                code: '55423-8',
                display: 'Number of steps'
            });
            expect(coding.system).toBe('http://loinc.org');
            expect(coding.code).toBe('55423-8');
            expect(coding.display).toBe('Number of steps');
        });
        it('should handle all Coding properties', () => {
            const coding = new Coding_1.Coding({
                system: 'http://snomed.info/sct',
                version: '2023-01',
                code: '73211009',
                display: 'Diabetes mellitus',
                userSelected: true
            });
            expect(coding.system).toBe('http://snomed.info/sct');
            expect(coding.version).toBe('2023-01');
            expect(coding.code).toBe('73211009');
            expect(coding.display).toBe('Diabetes mellitus');
            expect(coding.userSelected).toBe(true);
        });
    });
    describe('CodeableConcept Class', () => {
        it('should create a CodeableConcept', () => {
            const codeableConcept = new CodeableConcept_1.CodeableConcept({
                coding: [{
                        system: 'http://loinc.org',
                        code: '55423-8',
                        display: 'Number of steps'
                    }],
                text: 'Steps taken'
            });
            expect(codeableConcept.coding).toHaveLength(1);
            expect(codeableConcept.coding[0].system).toBe('http://loinc.org');
            expect(codeableConcept.text).toBe('Steps taken');
        });
        it('should handle multiple codings', () => {
            const codeableConcept = new CodeableConcept_1.CodeableConcept({
                coding: [{
                        system: 'http://loinc.org',
                        code: '55423-8'
                    }, {
                        system: 'http://snomed.info/sct',
                        code: '226528007'
                    }]
            });
            expect(codeableConcept.coding).toHaveLength(2);
            expect(codeableConcept.coding[0].system).toBe('http://loinc.org');
            expect(codeableConcept.coding[1].system).toBe('http://snomed.info/sct');
        });
    });
    describe('Reference Class', () => {
        it('should create a Reference', () => {
            const reference = new Reference_1.Reference({
                reference: 'Patient/123',
                display: 'John Doe'
            });
            expect(reference.reference).toBe('Patient/123');
            expect(reference.display).toBe('John Doe');
        });
        it('should handle all Reference properties', () => {
            const reference = new Reference_1.Reference({
                reference: 'Organization/hospital-1',
                type: 'Organization',
                identifier: {
                    system: 'http://hospital.example.org',
                    value: 'HOSP001'
                },
                display: 'Example Hospital'
            });
            expect(reference.reference).toBe('Organization/hospital-1');
            expect(reference.type).toBe('Organization');
            expect(reference.display).toBe('Example Hospital');
        });
    });
    describe('Extension Class', () => {
        it('should create an Extension', () => {
            const extension = new Extension_1.Extension({
                url: 'http://example.org/extension/patient-importance',
                valueString: 'VIP'
            });
            expect(extension.url).toBe('http://example.org/extension/patient-importance');
            expect(extension.valueString).toBe('VIP');
        });
        it('should handle nested extensions', () => {
            const extension = new Extension_1.Extension({
                url: 'http://example.org/complex-extension',
                extension: [{
                        url: 'code',
                        valueString: 'ABC123'
                    }, {
                        url: 'system',
                        valueString: 'http://example.org/codes'
                    }]
            });
            expect(extension.url).toBe('http://example.org/complex-extension');
            expect(extension.extension).toHaveLength(2);
        });
        it('should require url property', () => __awaiter(void 0, void 0, void 0, function* () {
            const extension = new Extension_1.Extension();
            const errors = yield (0, class_validator_1.validate)(extension);
            expect(errors.length).toBeGreaterThan(0);
            expect(errors[0].property).toBe('url');
        }));
    });
    describe('Meta Class', () => {
        it('should create a Meta', () => {
            const meta = new Meta_1.Meta({
                versionId: '1',
                lastUpdated: '2023-01-01T12:00:00Z'
            });
            expect(meta.versionId).toBe('1');
            expect(meta.lastUpdated).toBe('2023-01-01T12:00:00Z');
        });
        it('should handle all Meta properties', () => {
            const meta = new Meta_1.Meta({
                versionId: '2',
                lastUpdated: '2023-02-01T12:00:00Z',
                source: 'http://source.example.org',
                profile: ['http://example.org/StructureDefinition/MyPatient'],
                security: [{
                        system: 'http://terminology.hl7.org/CodeSystem/v3-ActReason',
                        code: 'HTEST'
                    }],
                tag: [{
                        system: 'http://example.org/tags',
                        code: 'test-data'
                    }]
            });
            expect(meta.versionId).toBe('2');
            expect(meta.source).toBe('http://source.example.org');
            expect(meta.profile).toEqual(['http://example.org/StructureDefinition/MyPatient']);
            expect(meta.security).toHaveLength(1);
            expect(meta.tag).toHaveLength(1);
        });
    });
    describe('Element Extensions', () => {
        it('should handle primitive extensions correctly', () => {
            const name = new HumanName_1.HumanName({
                family: 'Smith',
                _family: {
                    extension: [{
                            url: 'http://example.org/family-name-origin',
                            valueString: 'Irish'
                        }]
                }
            });
            expect(name.family).toBe('Smith');
            expect(name._family).toBeDefined();
            expect(name._family.extension).toHaveLength(1);
        });
    });
    describe('Validation Edge Cases', () => {
        it('should handle empty arrays correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            const address = new Address_1.Address({
                line: []
            });
            const errors = yield (0, class_validator_1.validate)(address);
            expect(errors).toHaveLength(0);
        }));
        it('should validate nested objects', () => __awaiter(void 0, void 0, void 0, function* () {
            const codeableConcept = new CodeableConcept_1.CodeableConcept({
                coding: [{}]
            });
            const errors = yield (0, class_validator_1.validate)(codeableConcept, { validationError: { target: false } });
            expect(errors.length).toBeGreaterThan(0);
        }));
    });
});
//# sourceMappingURL=elements.test.js.map