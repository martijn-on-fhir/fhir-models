import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class BiologicallyDerivedProductProcessing extends BackboneElement {
    additive?: Reference;
    description?: string;
    _description?: Element;
    procedure?: CodeableConcept;
    timeDateTime?: string;
    _timeDateTime?: Element;
    timePeriod?: Period;
    constructor(source?: Partial<BiologicallyDerivedProductProcessing>);
}
//# sourceMappingURL=BiologicallyDerivedProductProcessing.d.ts.map