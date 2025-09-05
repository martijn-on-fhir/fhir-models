import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
export declare class InsurancePlanPlanGeneralCost extends BackboneElement {
    comment?: string;
    _comment?: Element;
    cost?: Money;
    groupSize?: number;
    type?: CodeableConcept;
    constructor(source?: Partial<InsurancePlanPlanGeneralCost>);
}
//# sourceMappingURL=InsurancePlanPlanGeneralCost.d.ts.map