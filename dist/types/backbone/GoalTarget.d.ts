import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Ratio } from '../elements/Ratio';
export declare class GoalTarget extends BackboneElement {
    detailQuantity?: Quantity;
    detailRange?: Range;
    detailCodeableConcept?: CodeableConcept;
    detailString?: string;
    _detailString?: Element;
    detailBoolean?: boolean;
    _detailBoolean?: Element;
    detailInteger?: number;
    detailRatio?: Ratio;
    dueDate?: string;
    _dueDate?: Element;
    dueDuration?: Duration;
    measure?: CodeableConcept;
    constructor(source?: Partial<GoalTarget>);
}
//# sourceMappingURL=GoalTarget.d.ts.map