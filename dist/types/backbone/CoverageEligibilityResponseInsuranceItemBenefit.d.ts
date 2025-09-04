import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
export declare class CoverageEligibilityResponseInsuranceItemBenefit extends BackboneElement {
    allowedUnsignedInt?: number;
    allowedString?: string;
    _allowedString?: Element;
    allowedMoney?: Money;
    type?: CodeableConcept;
    usedUnsignedInt?: number;
    usedString?: string;
    _usedString?: Element;
    usedMoney?: Money;
    constructor(source?: Partial<CoverageEligibilityResponseInsuranceItemBenefit>);
}
//# sourceMappingURL=CoverageEligibilityResponseInsuranceItemBenefit.d.ts.map