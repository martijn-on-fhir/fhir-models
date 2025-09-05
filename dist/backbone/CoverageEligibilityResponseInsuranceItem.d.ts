import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageEligibilityResponseInsuranceItemBenefit } from './CoverageEligibilityResponseInsuranceItemBenefit';
import { Reference } from '../elements/Reference';
export declare class CoverageEligibilityResponseInsuranceItem extends BackboneElement {
    authorizationRequired?: boolean;
    _authorizationRequired?: Element;
    authorizationSupporting?: CodeableConcept[];
    authorizationUrl?: string;
    _authorizationUrl?: Element;
    benefit?: CoverageEligibilityResponseInsuranceItemBenefit[];
    category?: CodeableConcept;
    description?: string;
    _description?: Element;
    excluded?: boolean;
    _excluded?: Element;
    modifier?: CodeableConcept[];
    name?: string;
    _name?: Element;
    network?: CodeableConcept;
    productOrService?: CodeableConcept;
    provider?: Reference;
    term?: CodeableConcept;
    unit?: CodeableConcept;
    constructor(source?: Partial<CoverageEligibilityResponseInsuranceItem>);
}
//# sourceMappingURL=CoverageEligibilityResponseInsuranceItem.d.ts.map