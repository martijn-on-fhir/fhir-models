import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Expression } from '../elements/Expression';
export declare class MeasureGroupPopulation extends BackboneElement {
    code?: CodeableConcept;
    criteria?: Expression;
    description?: string;
    _description?: Element;
    constructor(source?: Partial<MeasureGroupPopulation>);
}
//# sourceMappingURL=MeasureGroupPopulation.d.ts.map