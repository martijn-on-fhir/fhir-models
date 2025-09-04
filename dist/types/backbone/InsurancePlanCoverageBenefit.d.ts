import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { InsurancePlanCoverageBenefitLimit } from './InsurancePlanCoverageBenefitLimit';
export declare class InsurancePlanCoverageBenefit extends BackboneElement {
    limit?: InsurancePlanCoverageBenefitLimit[];
    requirement?: string;
    _requirement?: Element;
    type?: CodeableConcept;
    constructor(source?: Partial<InsurancePlanCoverageBenefit>);
}
//# sourceMappingURL=InsurancePlanCoverageBenefit.d.ts.map