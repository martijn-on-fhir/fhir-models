import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
export declare class ExplanationOfBenefitInsurance extends BackboneElement {
    coverage?: Reference;
    focal?: boolean;
    _focal?: Element;
    preAuthRef?: string[];
    _preAuthRef?: Element[];
    constructor(source?: Partial<ExplanationOfBenefitInsurance>);
}
//# sourceMappingURL=ExplanationOfBenefitInsurance.d.ts.map