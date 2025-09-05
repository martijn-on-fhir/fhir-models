import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { HumanName } from '../elements/HumanName';
export declare class OrganizationContact extends BackboneElement {
    address?: Address;
    name?: HumanName;
    purpose?: CodeableConcept;
    telecom?: ContactPoint[];
    constructor(source?: Partial<OrganizationContact>);
}
//# sourceMappingURL=OrganizationContact.d.ts.map