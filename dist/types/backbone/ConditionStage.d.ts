import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ConditionStage extends BackboneElement {
    assessment?: Reference[];
    summary?: CodeableConcept;
    type?: CodeableConcept;
    constructor(source?: Partial<ConditionStage>);
}
//# sourceMappingURL=ConditionStage.d.ts.map