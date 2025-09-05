import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class SpecimenProcessing extends BackboneElement {
    additive?: Reference[];
    description?: string;
    _description?: Element;
    procedure?: CodeableConcept;
    timeDateTime?: string;
    _timeDateTime?: Element;
    timePeriod?: Period;
    constructor(source?: Partial<SpecimenProcessing>);
}
//# sourceMappingURL=SpecimenProcessing.d.ts.map