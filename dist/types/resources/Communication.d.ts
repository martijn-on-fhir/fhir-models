import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CommunicationPayload } from '../backbone/CommunicationPayload';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class Communication extends DomainResource {
    readonly resourceType: "Communication";
    about?: Reference[];
    basedOn?: Reference[];
    category?: CodeableConcept[];
    encounter?: Reference;
    identifier?: Identifier[];
    inResponseTo?: Reference[];
    instantiatesCanonical?: string[];
    _instantiatesCanonical?: Element[];
    instantiatesUri?: string[];
    _instantiatesUri?: Element[];
    medium?: CodeableConcept[];
    note?: Annotation[];
    partOf?: Reference[];
    payload?: CommunicationPayload[];
    priority?: ('routine' | 'urgent' | 'asap' | 'stat');
    _priority?: Element;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    received?: string;
    _received?: Element;
    recipient?: Reference[];
    sender?: Reference;
    sent?: string;
    _sent?: Element;
    status?: ('preparation' | 'in-progress' | 'not-done' | 'on-hold' | 'stopped' | 'completed' | 'entered-in-error' | 'unknown') | undefined;
    constructor(source?: Partial<Communication>);
}
//# sourceMappingURL=Communication.d.ts.map