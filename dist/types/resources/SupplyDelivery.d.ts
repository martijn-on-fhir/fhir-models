import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { SupplyDeliverySuppliedItem } from '../backbone/SupplyDeliverySuppliedItem';
import { Timing } from '../backbone/Timing';
export declare class SupplyDelivery extends DomainResource {
    readonly resourceType: "SupplyDelivery";
    basedOn?: Reference[];
    destination?: Reference;
    identifier?: Identifier[];
    occurrenceDateTime?: string;
    _occurrenceDateTime?: Element;
    occurrencePeriod?: Period;
    occurrenceTiming?: Timing;
    partOf?: Reference[];
    patient?: Reference;
    receiver?: Reference[];
    status?: ('in-progress' | 'completed' | 'abandoned' | 'entered-in-error');
    _status?: Element;
    suppliedItem?: SupplyDeliverySuppliedItem;
    supplier?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<SupplyDelivery>);
}
//# sourceMappingURL=SupplyDelivery.d.ts.map