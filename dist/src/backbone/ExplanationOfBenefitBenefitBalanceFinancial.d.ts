import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
export declare class ExplanationOfBenefitBenefitBalanceFinancial extends BackboneElement {
    allowedUnsignedInt?: number;
    allowedString?: string;
    _allowedString?: Element;
    allowedMoney?: Money;
    type?: CodeableConcept;
    usedUnsignedInt?: number;
    usedMoney?: Money;
    constructor(source?: Partial<ExplanationOfBenefitBenefitBalanceFinancial>);
}
//# sourceMappingURL=ExplanationOfBenefitBenefitBalanceFinancial.d.ts.map