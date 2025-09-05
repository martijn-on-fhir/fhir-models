import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { OrganizationContact } from '../backbone/OrganizationContact';
import { Reference } from '../elements/Reference';
export declare class Organization extends DomainResource {
    readonly resourceType: "Organization";
    active?: boolean;
    _active?: Element;
    address?: Address[];
    alias?: string[];
    _alias?: Element[];
    contact?: OrganizationContact[];
    endpoint?: Reference[];
    identifier?: Identifier[];
    name?: string;
    _name?: Element;
    partOf?: Reference;
    telecom?: ContactPoint[];
    type?: CodeableConcept[];
    constructor(source?: Partial<Organization>);
}
//# sourceMappingURL=Organization.d.ts.map