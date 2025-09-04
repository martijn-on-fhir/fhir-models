// Basic test to verify the core classes work
import { Element } from './base/Element';
import { DomainResource } from './base/DomainResource';
import { Address } from './elements/Address';
import { HumanName } from './elements/HumanName';
import { Patient } from './resources/Patient';

// Test Element creation
const element = new Element({ id: 'test-element' });
console.log('Element created:', element.id);

// Test Address creation  
const address = new Address({
  city: 'Test City',
  country: 'US',
  line: ['123 Test St'],
  type: 'physical'
});
console.log('Address created:', address.city);

// Test HumanName creation
const name = new HumanName({
  family: 'Doe',
  given: ['John']
});
console.log('Name created:', name.family);

// Test Patient creation
const patient = new Patient({
  active: true,
  name: [name],
  address: [address]
});
console.log('Patient created:', patient.resourceType);

export { element, address, name, patient };