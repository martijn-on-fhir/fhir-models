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
const Element_1 = require("../src/base/Element");
const BackboneElement_1 = require("../src/base/BackboneElement");
const DomainResource_1 = require("../src/base/DomainResource");
const Resource_1 = require("../src/base/Resource");
const Extension_1 = require("../src/elements/Extension");
const Narrative_1 = require("../src/elements/Narrative");
const Meta_1 = require("../src/elements/Meta");
describe('Base Classes', () => {
    describe('Element Class', () => {
        it('should create an Element with default constructor', () => {
            const element = new Element_1.Element();
            expect(element).toBeInstanceOf(Element_1.Element);
            expect(element.id).toBeUndefined();
            expect(element.extension).toBeUndefined();
        });
        it('should create an Element with provided data', () => {
            const elementData = {
                id: 'element-123',
                extension: [{
                        url: 'http://example.org/test-extension',
                        valueString: 'test value'
                    }]
            };
            const element = new Element_1.Element(elementData);
            expect(element.id).toBe('element-123');
            expect(element.extension).toHaveLength(1);
            expect(element.extension[0].url).toBe('http://example.org/test-extension');
        });
        it('should handle id property', () => {
            const element = new Element_1.Element();
            element.id = 'test-id';
            expect(element.id).toBe('test-id');
        });
        it('should handle _id extension', () => {
            const element = new Element_1.Element();
            const idExtension = new Element_1.Element({
                extension: [{
                        url: 'http://example.org/id-extension',
                        valueString: 'extended id info'
                    }]
            });
            element._id = idExtension;
            expect(element._id).toBe(idExtension);
        });
        it('should handle extension array', () => {
            const element = new Element_1.Element();
            const ext1 = new Extension_1.Extension({
                url: 'http://example.org/ext1',
                valueString: 'value1'
            });
            const ext2 = new Extension_1.Extension({
                url: 'http://example.org/ext2',
                valueString: 'value2'
            });
            element.extension = [ext1, ext2];
            expect(element.extension).toHaveLength(2);
            expect(element.extension[0].url).toBe('http://example.org/ext1');
            expect(element.extension[1].url).toBe('http://example.org/ext2');
        });
        it('should validate successfully with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
            const element = new Element_1.Element({
                id: 'valid-id'
            });
            const errors = yield (0, class_validator_1.validate)(element);
            expect(errors).toHaveLength(0);
        }));
        it('should reject invalid id (non-string)', () => __awaiter(void 0, void 0, void 0, function* () {
            const element = new Element_1.Element();
            element.id = 123;
            const errors = yield (0, class_validator_1.validate)(element);
            expect(errors.length).toBeGreaterThan(0);
            expect(errors[0].property).toBe('id');
        }));
    });
    describe('BackboneElement Class', () => {
        it('should create a BackboneElement', () => {
            const backboneElement = new BackboneElement_1.BackboneElement();
            expect(backboneElement).toBeInstanceOf(BackboneElement_1.BackboneElement);
            expect(backboneElement).toBeInstanceOf(Element_1.Element);
            expect(backboneElement.modifierExtension).toBeUndefined();
        });
        it('should create a BackboneElement with data', () => {
            const data = {
                id: 'backbone-123',
                modifierExtension: [{
                        url: 'http://example.org/modifier',
                        valueBoolean: true
                    }]
            };
            const backboneElement = new BackboneElement_1.BackboneElement(data);
            expect(backboneElement.id).toBe('backbone-123');
            expect(backboneElement.modifierExtension).toHaveLength(1);
            expect(backboneElement.modifierExtension[0].url).toBe('http://example.org/modifier');
        });
        it('should handle modifierExtension array', () => {
            const backboneElement = new BackboneElement_1.BackboneElement();
            const modExt = new Extension_1.Extension({
                url: 'http://example.org/important-modifier',
                valueString: 'critical modification'
            });
            backboneElement.modifierExtension = [modExt];
            expect(backboneElement.modifierExtension).toHaveLength(1);
            expect(backboneElement.modifierExtension[0].url).toBe('http://example.org/important-modifier');
        });
        it('should validate successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const backboneElement = new BackboneElement_1.BackboneElement({
                id: 'valid-backbone'
            });
            const errors = yield (0, class_validator_1.validate)(backboneElement);
            expect(errors).toHaveLength(0);
        }));
    });
    describe('Resource Class', () => {
        class TestResource extends Resource_1.Resource {
            constructor() {
                super(...arguments);
                this.resourceType = 'TestResource';
            }
        }
        it('should create a Resource', () => {
            const resource = new TestResource();
            expect(resource).toBeInstanceOf(Resource_1.Resource);
            expect(resource.resourceType).toBe('TestResource');
            expect(resource.id).toBeUndefined();
            expect(resource.meta).toBeUndefined();
        });
        it('should create a Resource with data', () => {
            const data = {
                id: 'resource-123',
                meta: {
                    versionId: '1',
                    lastUpdated: '2023-01-01T12:00:00Z'
                },
                implicitRules: 'http://example.org/rules',
                language: 'en'
            };
            const resource = new TestResource(data);
            expect(resource.id).toBe('resource-123');
            expect(resource.implicitRules).toBe('http://example.org/rules');
            expect(resource.language).toBe('en');
        });
        it('should handle meta property', () => {
            const resource = new TestResource();
            const meta = new Meta_1.Meta({
                versionId: '2',
                lastUpdated: '2023-02-01T12:00:00Z'
            });
            resource.meta = meta;
            expect(resource.meta).toBe(meta);
            expect(resource.meta.versionId).toBe('2');
        });
        it('should validate successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const resource = new TestResource({
                id: 'valid-resource'
            });
            const errors = yield (0, class_validator_1.validate)(resource);
            expect(errors).toHaveLength(0);
        }));
        it('should reject invalid language (non-string)', () => __awaiter(void 0, void 0, void 0, function* () {
            const resource = new TestResource();
            resource.language = 123;
            const errors = yield (0, class_validator_1.validate)(resource);
            expect(errors.length).toBeGreaterThan(0);
            expect(errors[0].property).toBe('language');
        }));
    });
    describe('DomainResource Class', () => {
        class TestDomainResource extends DomainResource_1.DomainResource {
            constructor() {
                super(...arguments);
                this.resourceType = 'TestDomainResource';
            }
        }
        it('should create a DomainResource', () => {
            const domainResource = new TestDomainResource();
            expect(domainResource).toBeInstanceOf(DomainResource_1.DomainResource);
            expect(domainResource).toBeInstanceOf(Resource_1.Resource);
            expect(domainResource.resourceType).toBe('TestDomainResource');
            expect(domainResource.text).toBeUndefined();
            expect(domainResource.contained).toBeUndefined();
            expect(domainResource.extension).toBeUndefined();
            expect(domainResource.modifierExtension).toBeUndefined();
        });
        it('should create a DomainResource with data', () => {
            const data = {
                id: 'domain-resource-123',
                text: {
                    status: 'generated',
                    div: '<div>Test narrative</div>'
                },
                contained: [],
                extension: [{
                        url: 'http://example.org/extension',
                        valueString: 'extended info'
                    }]
            };
            const domainResource = new TestDomainResource(data);
            expect(domainResource.id).toBe('domain-resource-123');
            expect(domainResource.text.status).toBe('generated');
            expect(domainResource.extension).toHaveLength(1);
        });
        it('should handle text property', () => {
            const domainResource = new TestDomainResource();
            const narrative = new Narrative_1.Narrative({
                status: 'additional',
                div: '<div>Additional narrative content</div>'
            });
            domainResource.text = narrative;
            expect(domainResource.text).toBe(narrative);
            expect(domainResource.text.status).toBe('additional');
        });
        it('should handle contained resources array', () => {
            const domainResource = new TestDomainResource();
            const containedResource = new TestDomainResource({
                id: 'contained-1'
            });
            domainResource.contained = [containedResource];
            expect(domainResource.contained).toHaveLength(1);
            expect(domainResource.contained[0].id).toBe('contained-1');
        });
        it('should handle extension and modifierExtension arrays', () => {
            const domainResource = new TestDomainResource();
            const extension = new Extension_1.Extension({
                url: 'http://example.org/standard-extension',
                valueString: 'standard value'
            });
            const modifierExtension = new Extension_1.Extension({
                url: 'http://example.org/modifier-extension',
                valueBoolean: true
            });
            domainResource.extension = [extension];
            domainResource.modifierExtension = [modifierExtension];
            expect(domainResource.extension).toHaveLength(1);
            expect(domainResource.modifierExtension).toHaveLength(1);
            expect(domainResource.extension[0].url).toBe('http://example.org/standard-extension');
            expect(domainResource.modifierExtension[0].url).toBe('http://example.org/modifier-extension');
        });
        it('should validate successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const domainResource = new TestDomainResource({
                id: 'valid-domain-resource'
            });
            const errors = yield (0, class_validator_1.validate)(domainResource);
            expect(errors).toHaveLength(0);
        }));
    });
    describe('Inheritance Chain', () => {
        it('should maintain proper inheritance relationships', () => {
            const element = new Element_1.Element();
            const backboneElement = new BackboneElement_1.BackboneElement();
            class TestResource extends Resource_1.Resource {
                constructor() {
                    super(...arguments);
                    this.resourceType = 'Test';
                }
            }
            class TestDomainResource extends DomainResource_1.DomainResource {
                constructor() {
                    super(...arguments);
                    this.resourceType = 'TestDomain';
                }
            }
            const testResource = new TestResource();
            const testDomainResource = new TestDomainResource();
            expect(element).toBeInstanceOf(Element_1.Element);
            expect(backboneElement).toBeInstanceOf(BackboneElement_1.BackboneElement);
            expect(backboneElement).toBeInstanceOf(Element_1.Element);
            expect(testResource).toBeInstanceOf(TestResource);
            expect(testResource).toBeInstanceOf(Resource_1.Resource);
            expect(testResource).toBeInstanceOf(Element_1.Element);
            expect(testDomainResource).toBeInstanceOf(TestDomainResource);
            expect(testDomainResource).toBeInstanceOf(DomainResource_1.DomainResource);
            expect(testDomainResource).toBeInstanceOf(Resource_1.Resource);
            expect(testDomainResource).toBeInstanceOf(Element_1.Element);
        });
    });
    describe('Serialization', () => {
        it('should serialize base classes correctly', () => {
            const element = new Element_1.Element({
                id: 'serialize-element',
                extension: [{
                        url: 'http://example.org/test',
                        valueString: 'test'
                    }]
            });
            const json = JSON.stringify(element);
            const parsed = JSON.parse(json);
            expect(parsed.id).toBe('serialize-element');
            expect(parsed.extension).toHaveLength(1);
            expect(parsed.extension[0].url).toBe('http://example.org/test');
        });
    });
});
//# sourceMappingURL=base-classes.test.js.map