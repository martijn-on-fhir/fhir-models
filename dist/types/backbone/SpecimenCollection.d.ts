import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class SpecimenCollection extends BackboneElement {
    bodySite?: CodeableConcept;
    collectedDateTime?: string;
    _collectedDateTime?: Element;
    collectedPeriod?: Period;
    collector?: Reference;
    duration?: Duration;
    fastingStatusCodeableConcept?: CodeableConcept;
    fastingStatusDuration?: Duration;
    method?: CodeableConcept;
    quantity?: Quantity;
    constructor(source?: Partial<SpecimenCollection>);
}
//# sourceMappingURL=SpecimenCollection.d.ts.map