import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { InsurancePlanCoverageBenefit } from './InsurancePlanCoverageBenefit';
import { Reference } from '../elements/Reference';
export declare class InsurancePlanCoverage extends BackboneElement {
    benefit?: InsurancePlanCoverageBenefit[];
    network?: Reference[];
    type?: CodeableConcept;
    constructor(source?: Partial<InsurancePlanCoverage>);
}
//# sourceMappingURL=InsurancePlanCoverage.d.ts.map