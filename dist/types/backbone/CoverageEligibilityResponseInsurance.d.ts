import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CoverageEligibilityResponseInsuranceItem } from './CoverageEligibilityResponseInsuranceItem';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class CoverageEligibilityResponseInsurance extends BackboneElement {
    benefitPeriod?: Period;
    coverage?: Reference;
    inforce?: boolean;
    _inforce?: Element;
    item?: CoverageEligibilityResponseInsuranceItem[];
    constructor(source?: Partial<CoverageEligibilityResponseInsurance>);
}
//# sourceMappingURL=CoverageEligibilityResponseInsurance.d.ts.map