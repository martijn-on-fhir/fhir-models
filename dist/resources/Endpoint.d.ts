import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class Endpoint extends DomainResource {
    readonly resourceType: "Endpoint";
    address?: string;
    _address?: Element;
    connectionType?: Coding;
    contact?: ContactPoint[];
    header?: string[];
    _header?: Element[];
    identifier?: Identifier[];
    managingOrganization?: Reference;
    name?: string;
    _name?: Element;
    payloadMimeType?: string[];
    _payloadMimeType?: Element[];
    payloadType?: CodeableConcept[];
    period?: Period;
    status?: ('active' | 'suspended' | 'error' | 'off' | 'entered-in-error' | 'test');
    _status?: Element;
    constructor(source?: Partial<Endpoint>);
}
//# sourceMappingURL=Endpoint.d.ts.map