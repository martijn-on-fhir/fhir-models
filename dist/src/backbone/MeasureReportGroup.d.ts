import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MeasureReportGroupPopulation } from './MeasureReportGroupPopulation';
import { MeasureReportGroupStratifier } from './MeasureReportGroupStratifier';
import { Quantity } from '../elements/Quantity';
export declare class MeasureReportGroup extends BackboneElement {
    code?: CodeableConcept;
    measureScore?: Quantity;
    population?: MeasureReportGroupPopulation[];
    stratifier?: MeasureReportGroupStratifier[];
    constructor(source?: Partial<MeasureReportGroup>);
}
//# sourceMappingURL=MeasureReportGroup.d.ts.map