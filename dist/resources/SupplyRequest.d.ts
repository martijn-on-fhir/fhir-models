import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import { SupplyRequestParameter } from '../backbone/SupplyRequestParameter';
import { Timing } from '../backbone/Timing';
export declare class SupplyRequest extends DomainResource {
    readonly resourceType: "SupplyRequest";
    authoredOn?: string;
    _authoredOn?: Element;
    category?: CodeableConcept;
    deliverFrom?: Reference;
    deliverTo?: Reference;
    identifier?: Identifier[];
    itemCodeableConcept?: CodeableConcept;
    itemReference?: Reference;
    occurrenceDateTime?: string;
    _occurrenceDateTime?: Element;
    occurrencePeriod?: Period;
    occurrenceTiming?: Timing;
    parameter?: SupplyRequestParameter[];
    priority?: ('routine' | 'urgent' | 'asap' | 'stat');
    _priority?: Element;
    quantity?: Quantity;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    requester?: Reference;
    status?: ('draft' | 'active' | 'suspended' | 'cancelled' | 'completed' | 'entered-in-error' | 'unknown');
    _status?: Element;
    supplier?: Reference[];
    constructor(source?: Partial<SupplyRequest>);
}
//# sourceMappingURL=SupplyRequest.d.ts.map