import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class OrganizationAffiliation extends DomainResource {
    readonly resourceType: "OrganizationAffiliation";
    active?: boolean;
    _active?: Element;
    code?: CodeableConcept[];
    endpoint?: Reference[];
    healthcareService?: Reference[];
    identifier?: Identifier[];
    location?: Reference[];
    network?: Reference[];
    organization?: Reference;
    participatingOrganization?: Reference;
    period?: Period;
    specialty?: CodeableConcept[];
    telecom?: ContactPoint[];
    constructor(source?: Partial<OrganizationAffiliation>);
}
//# sourceMappingURL=OrganizationAffiliation.d.ts.map