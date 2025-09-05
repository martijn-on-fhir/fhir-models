import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class ConditionEvidence extends BackboneElement {
    code?: CodeableConcept[];
    detail?: Reference[];
    constructor(source?: Partial<ConditionEvidence>);
}
//# sourceMappingURL=ConditionEvidence.d.ts.map