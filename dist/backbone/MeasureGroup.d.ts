import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MeasureGroupPopulation } from './MeasureGroupPopulation';
import { MeasureGroupStratifier } from './MeasureGroupStratifier';
export declare class MeasureGroup extends BackboneElement {
    code?: CodeableConcept;
    description?: string;
    _description?: Element;
    population?: MeasureGroupPopulation[];
    stratifier?: MeasureGroupStratifier[];
    constructor(source?: Partial<MeasureGroup>);
}
//# sourceMappingURL=MeasureGroup.d.ts.map