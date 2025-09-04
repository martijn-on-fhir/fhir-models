import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MeasureReportGroupStratifierStratumComponent } from './MeasureReportGroupStratifierStratumComponent';
import { MeasureReportGroupStratifierStratumPopulation } from './MeasureReportGroupStratifierStratumPopulation';
import { Quantity } from '../elements/Quantity';
export declare class MeasureReportGroupStratifierStratum extends BackboneElement {
    component?: MeasureReportGroupStratifierStratumComponent[];
    measureScore?: Quantity;
    population?: MeasureReportGroupStratifierStratumPopulation[];
    value?: CodeableConcept;
    constructor(source?: Partial<MeasureReportGroupStratifierStratum>);
}
//# sourceMappingURL=MeasureReportGroupStratifierStratum.d.ts.map