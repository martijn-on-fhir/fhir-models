import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
export declare class ObservationReferenceRange extends BackboneElement {
    age?: Range;
    appliesTo?: CodeableConcept[];
    high?: Quantity;
    low?: Quantity;
    text?: string;
    _text?: Element;
    type?: CodeableConcept;
    constructor(source?: Partial<ObservationReferenceRange>);
}
//# sourceMappingURL=ObservationReferenceRange.d.ts.map