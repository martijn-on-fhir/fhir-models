/**
 * Tests for base FHIR classes (Element, BackboneElement, DomainResource, etc.)
 */

import { validate } from 'class-validator';
import { Element } from '../src/base/Element';
import { BackboneElement } from '../src/base/BackboneElement';
import { DomainResource } from '../src/base/DomainResource';
import { Resource } from '../src/base/Resource';
import { Extension } from '../src/elements/Extension';
import { Narrative } from '../src/elements/Narrative';
import { Meta } from '../src/elements/Meta';

describe('Base Classes', () => {
  
  describe('Element Class', () => {
    it('should create an Element with default constructor', () => {
      const element = new Element();
      
      expect(element).toBeInstanceOf(Element);
      expect(element.id).toBeUndefined();
      expect(element.extension).toBeUndefined();
    });

    it('should create an Element with provided data', () => {
      const elementData = {
        id: 'element-123',
        extension: [{
          url: 'http://example.org/test-extension',
          valueString: 'test value'
        } as any]
      };

      const element = new Element(elementData);
      
      expect(element.id).toBe('element-123');
      expect(element.extension).toHaveLength(1);
      expect(element.extension![0].url).toBe('http://example.org/test-extension');
    });

    it('should handle id property', () => {
      const element = new Element();
      element.id = 'test-id';
      
      expect(element.id).toBe('test-id');
    });

    it('should handle _id extension', () => {
      const element = new Element();
      const idExtension = new Element({
        extension: [{
          url: 'http://example.org/id-extension',
          valueString: 'extended id info'
        } as any]
      });

      element._id = idExtension;
      
      expect(element._id).toBe(idExtension);
    });

    it('should handle extension array', () => {
      const element = new Element();
      const ext1 = new Extension({
        url: 'http://example.org/ext1',
        valueString: 'value1'
      });
      const ext2 = new Extension({
        url: 'http://example.org/ext2',
        valueString: 'value2'
      });

      element.extension = [ext1, ext2];
      
      expect(element.extension).toHaveLength(2);
      expect(element.extension![0].url).toBe('http://example.org/ext1');
      expect(element.extension![1].url).toBe('http://example.org/ext2');
    });

    it('should validate successfully with valid data', async () => {
      const element = new Element({
        id: 'valid-id'
      });

      const errors = await validate(element);
      expect(errors).toHaveLength(0);
    });

    it('should reject invalid id (non-string)', async () => {
      const element = new Element();
      (element as any).id = 123;

      const errors = await validate(element);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].property).toBe('id');
    });
  });

  describe('BackboneElement Class', () => {
    it('should create a BackboneElement', () => {
      const backboneElement = new BackboneElement();
      
      expect(backboneElement).toBeInstanceOf(BackboneElement);
      expect(backboneElement).toBeInstanceOf(Element);
      expect(backboneElement.modifierExtension).toBeUndefined();
    });

    it('should create a BackboneElement with data', () => {
      const data = {
        id: 'backbone-123',
        modifierExtension: [{
          url: 'http://example.org/modifier',
          valueBoolean: true
        } as any]
      };

      const backboneElement = new BackboneElement(data);
      
      expect(backboneElement.id).toBe('backbone-123');
      expect(backboneElement.modifierExtension).toHaveLength(1);
      expect(backboneElement.modifierExtension![0].url).toBe('http://example.org/modifier');
    });

    it('should handle modifierExtension array', () => {
      const backboneElement = new BackboneElement();
      const modExt = new Extension({
        url: 'http://example.org/important-modifier',
        valueString: 'critical modification'
      });

      backboneElement.modifierExtension = [modExt];
      
      expect(backboneElement.modifierExtension).toHaveLength(1);
      expect(backboneElement.modifierExtension![0].url).toBe('http://example.org/important-modifier');
    });

    it('should validate successfully', async () => {
      const backboneElement = new BackboneElement({
        id: 'valid-backbone'
      });

      const errors = await validate(backboneElement);
      expect(errors).toHaveLength(0);
    });
  });

  describe('Resource Class', () => {
    // Create a test class that extends Resource for testing
    class TestResource extends Resource {
      readonly resourceType = 'TestResource' as const;
    }

    it('should create a Resource', () => {
      const resource = new TestResource();
      
      expect(resource).toBeInstanceOf(Resource);
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
        } as any,
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
      const meta = new Meta({
        versionId: '2',
        lastUpdated: '2023-02-01T12:00:00Z'
      });

      resource.meta = meta;
      
      expect(resource.meta).toBe(meta);
      expect(resource.meta!.versionId).toBe('2');
    });

    it('should validate successfully', async () => {
      const resource = new TestResource({
        id: 'valid-resource'
      });

      const errors = await validate(resource);
      expect(errors).toHaveLength(0);
    });

    it('should reject invalid language (non-string)', async () => {
      const resource = new TestResource();
      (resource as any).language = 123;

      const errors = await validate(resource);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].property).toBe('language');
    });
  });

  describe('DomainResource Class', () => {
    // Create a test class that extends DomainResource for testing
    class TestDomainResource extends DomainResource {
      readonly resourceType = 'TestDomainResource' as const;
    }

    it('should create a DomainResource', () => {
      const domainResource = new TestDomainResource();
      
      expect(domainResource).toBeInstanceOf(DomainResource);
      expect(domainResource).toBeInstanceOf(Resource);
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
        } as any,
        contained: [],
        extension: [{
          url: 'http://example.org/extension',
          valueString: 'extended info'
        } as any]
      };

      const domainResource = new TestDomainResource(data);
      
      expect(domainResource.id).toBe('domain-resource-123');
      expect(domainResource.text!.status).toBe('generated');
      expect(domainResource.extension).toHaveLength(1);
    });

    it('should handle text property', () => {
      const domainResource = new TestDomainResource();
      const narrative = new Narrative({
        status: 'additional',
        div: '<div>Additional narrative content</div>'
      });

      domainResource.text = narrative;
      
      expect(domainResource.text).toBe(narrative);
      expect(domainResource.text!.status).toBe('additional');
    });

    it('should handle contained resources array', () => {
      const domainResource = new TestDomainResource();
      const containedResource = new TestDomainResource({
        id: 'contained-1'
      });

      domainResource.contained = [containedResource];
      
      expect(domainResource.contained).toHaveLength(1);
      expect(domainResource.contained![0].id).toBe('contained-1');
    });

    it('should handle extension and modifierExtension arrays', () => {
      const domainResource = new TestDomainResource();
      
      const extension = new Extension({
        url: 'http://example.org/standard-extension',
        valueString: 'standard value'
      });

      const modifierExtension = new Extension({
        url: 'http://example.org/modifier-extension',
        valueBoolean: true
      });

      domainResource.extension = [extension];
      domainResource.modifierExtension = [modifierExtension];
      
      expect(domainResource.extension).toHaveLength(1);
      expect(domainResource.modifierExtension).toHaveLength(1);
      expect(domainResource.extension![0].url).toBe('http://example.org/standard-extension');
      expect(domainResource.modifierExtension![0].url).toBe('http://example.org/modifier-extension');
    });

    it('should validate successfully', async () => {
      const domainResource = new TestDomainResource({
        id: 'valid-domain-resource'
      });

      const errors = await validate(domainResource);
      expect(errors).toHaveLength(0);
    });
  });

  describe('Inheritance Chain', () => {
    it('should maintain proper inheritance relationships', () => {
      const element = new Element();
      const backboneElement = new BackboneElement();
      
      // Create test classes inline
      class TestResource extends Resource {
        readonly resourceType = 'Test' as const;
      }
      
      class TestDomainResource extends DomainResource {
        readonly resourceType = 'TestDomain' as const;
      }
      
      const testResource = new TestResource();
      const testDomainResource = new TestDomainResource();

      // Element is base class
      expect(element).toBeInstanceOf(Element);

      // BackboneElement extends Element
      expect(backboneElement).toBeInstanceOf(BackboneElement);
      expect(backboneElement).toBeInstanceOf(Element);

      // Resource extends Element
      expect(testResource).toBeInstanceOf(TestResource);
      expect(testResource).toBeInstanceOf(Resource);
      expect(testResource).toBeInstanceOf(Element);

      // DomainResource extends Resource (and therefore Element)
      expect(testDomainResource).toBeInstanceOf(TestDomainResource);
      expect(testDomainResource).toBeInstanceOf(DomainResource);
      expect(testDomainResource).toBeInstanceOf(Resource);
      expect(testDomainResource).toBeInstanceOf(Element);
    });
  });

  describe('Serialization', () => {
    it('should serialize base classes correctly', () => {
      const element = new Element({
        id: 'serialize-element',
        extension: [{
          url: 'http://example.org/test',
          valueString: 'test'
        } as any]
      });

      const json = JSON.stringify(element);
      const parsed = JSON.parse(json);

      expect(parsed.id).toBe('serialize-element');
      expect(parsed.extension).toHaveLength(1);
      expect(parsed.extension[0].url).toBe('http://example.org/test');
    });
  });
});