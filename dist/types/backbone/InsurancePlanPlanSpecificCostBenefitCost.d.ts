import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
export declare class InsurancePlanPlanSpecificCostBenefitCost extends BackboneElement {
    applicability?: CodeableConcept;
    qualifiers?: CodeableConcept[];
    type?: CodeableConcept;
    value?: Quantity;
    constructor(source?: Partial<InsurancePlanPlanSpecificCostBenefitCost>);
}
//# sourceMappingURL=InsurancePlanPlanSpecificCostBenefitCost.d.ts.map