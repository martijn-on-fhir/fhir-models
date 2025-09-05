import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Duration } from '../elements/Duration';
import { Quantity } from '../elements/Quantity';
export declare class MedicationKnowledgeKinetics extends BackboneElement {
    areaUnderCurve?: Quantity[];
    halfLifePeriod?: Duration;
    lethalDose50?: Quantity[];
    constructor(source?: Partial<MedicationKnowledgeKinetics>);
}
//# sourceMappingURL=MedicationKnowledgeKinetics.d.ts.map