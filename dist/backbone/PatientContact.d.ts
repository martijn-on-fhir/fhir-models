import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { HumanName } from '../elements/HumanName';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class PatientContact extends BackboneElement {
    address?: Address;
    gender?: ('male' | 'female' | 'other' | 'unknown');
    _gender?: Element;
    name?: HumanName;
    organization?: Reference;
    period?: Period;
    relationship?: CodeableConcept[];
    telecom?: ContactPoint[];
    constructor(source?: Partial<PatientContact>);
}
//# sourceMappingURL=PatientContact.d.ts.map