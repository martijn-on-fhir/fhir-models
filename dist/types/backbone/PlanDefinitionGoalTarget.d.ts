import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
export declare class PlanDefinitionGoalTarget extends BackboneElement {
    detailQuantity?: Quantity;
    detailRange?: Range;
    detailCodeableConcept?: CodeableConcept;
    due?: Duration;
    measure?: CodeableConcept;
    constructor(source?: Partial<PlanDefinitionGoalTarget>);
}
//# sourceMappingURL=PlanDefinitionGoalTarget.d.ts.map