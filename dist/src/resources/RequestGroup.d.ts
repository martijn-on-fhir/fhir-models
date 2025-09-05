import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { RequestGroupAction } from '../backbone/RequestGroupAction';
export declare class RequestGroup extends DomainResource {
    readonly resourceType: "RequestGroup";
    action?: RequestGroupAction[];
    author?: Reference;
    authoredOn?: string;
    _authoredOn?: Element;
    basedOn?: Reference[];
    code?: CodeableConcept;
    encounter?: Reference;
    groupIdentifier?: Identifier;
    identifier?: Identifier[];
    instantiatesCanonical?: string[];
    _instantiatesCanonical?: Element[];
    instantiatesUri?: string[];
    _instantiatesUri?: Element[];
    intent?: ('proposal' | 'plan' | 'directive' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option');
    _intent?: Element;
    note?: Annotation[];
    priority?: ('routine' | 'urgent' | 'asap' | 'stat');
    _priority?: Element;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    replaces?: Reference[];
    status?: ('draft' | 'active' | 'on-hold' | 'revoked' | 'completed' | 'entered-in-error' | 'unknown');
    _status?: Element;
    subject?: Reference;
    constructor(source?: Partial<RequestGroup>);
}
//# sourceMappingURL=RequestGroup.d.ts.map