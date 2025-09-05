import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Expression } from '../elements/Expression';
import { MeasureGroupStratifierComponent } from './MeasureGroupStratifierComponent';
export declare class MeasureGroupStratifier extends BackboneElement {
    code?: CodeableConcept;
    component?: MeasureGroupStratifierComponent[];
    criteria?: Expression;
    description?: string;
    _description?: Element;
    constructor(source?: Partial<MeasureGroupStratifier>);
}
//# sourceMappingURL=MeasureGroupStratifier.d.ts.map