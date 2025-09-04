"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patient = exports.name = exports.address = exports.element = void 0;
const Element_1 = require("./base/Element");
const Address_1 = require("./elements/Address");
const HumanName_1 = require("./elements/HumanName");
const Patient_1 = require("./resources/Patient");
const element = new Element_1.Element({ id: 'test-element' });
exports.element = element;
console.log('Element created:', element.id);
const address = new Address_1.Address({
    city: 'Test City',
    country: 'US',
    line: ['123 Test St'],
    type: 'physical'
});
exports.address = address;
console.log('Address created:', address.city);
const name = new HumanName_1.HumanName({
    family: 'Doe',
    given: ['John']
});
exports.name = name;
console.log('Name created:', name.family);
const patient = new Patient_1.Patient({
    active: true,
    name: [name],
    address: [address]
});
exports.patient = patient;
console.log('Patient created:', patient.resourceType);
