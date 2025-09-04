import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { InsurancePlanPlanGeneralCost } from './InsurancePlanPlanGeneralCost';
import { InsurancePlanPlanSpecificCost } from './InsurancePlanPlanSpecificCost';
import { Reference } from '../elements/Reference';
export declare class InsurancePlanPlan extends BackboneElement {
    coverageArea?: Reference[];
    generalCost?: InsurancePlanPlanGeneralCost[];
    identifier?: Identifier[];
    network?: Reference[];
    specificCost?: InsurancePlanPlanSpecificCost[];
    type?: CodeableConcept;
    constructor(source?: Partial<InsurancePlanPlan>);
}
//# sourceMappingURL=InsurancePlanPlan.d.ts.map