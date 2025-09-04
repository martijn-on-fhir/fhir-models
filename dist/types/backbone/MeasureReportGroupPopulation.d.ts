import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class MeasureReportGroupPopulation extends BackboneElement {
    code?: CodeableConcept;
    count?: number;
    subjectResults?: Reference;
    constructor(source?: Partial<MeasureReportGroupPopulation>);
}
//# sourceMappingURL=MeasureReportGroupPopulation.d.ts.map