import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CommunicationRequestPayload } from '../backbone/CommunicationRequestPayload';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class CommunicationRequest extends DomainResource {
    readonly resourceType: "CommunicationRequest";
    about?: Reference[];
    authoredOn?: string;
    _authoredOn?: Element;
    basedOn?: Reference[];
    category?: CodeableConcept[];
    doNotPerform?: boolean;
    _doNotPerform?: Element;
    encounter?: Reference;
    groupIdentifier?: Identifier;
    identifier?: Identifier[];
    medium?: CodeableConcept[];
    note?: Annotation[];
    occurrenceDateTime?: string;
    _occurrenceDateTime?: Element;
    occurrencePeriod?: Period;
    payload?: CommunicationRequestPayload[];
    priority?: ('routine' | 'urgent' | 'asap' | 'stat');
    _priority?: Element;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    recipient?: Reference[];
    replaces?: Reference[];
    requester?: Reference;
    sender?: Reference;
    status?: ('draft' | 'active' | 'on-hold' | 'revoked' | 'completed' | 'entered-in-error' | 'unknown');
    constructor(source?: Partial<CommunicationRequest>);
}
//# sourceMappingURL=CommunicationRequest.d.ts.map