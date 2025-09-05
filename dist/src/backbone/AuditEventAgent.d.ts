import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { AuditEventAgentNetwork } from './AuditEventAgentNetwork';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { Reference } from '../elements/Reference';
export declare class AuditEventAgent extends BackboneElement {
    altId?: string;
    _altId?: Element;
    location?: Reference;
    media?: Coding;
    name?: string;
    _name?: Element;
    network?: AuditEventAgentNetwork;
    policy?: string[];
    _policy?: Element[];
    purposeOfUse?: CodeableConcept[];
    requestor?: boolean;
    _requestor?: Element;
    role?: CodeableConcept[];
    type?: CodeableConcept;
    who?: Reference;
    constructor(source?: Partial<AuditEventAgent>);
}
//# sourceMappingURL=AuditEventAgent.d.ts.map