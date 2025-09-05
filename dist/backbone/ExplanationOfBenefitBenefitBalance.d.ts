import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ExplanationOfBenefitBenefitBalanceFinancial } from './ExplanationOfBenefitBenefitBalanceFinancial';
export declare class ExplanationOfBenefitBenefitBalance extends BackboneElement {
    category?: CodeableConcept;
    description?: string;
    _description?: Element;
    excluded?: boolean;
    _excluded?: Element;
    financial?: ExplanationOfBenefitBenefitBalanceFinancial[];
    name?: string;
    _name?: Element;
    network?: CodeableConcept;
    term?: CodeableConcept;
    unit?: CodeableConcept;
    constructor(source?: Partial<ExplanationOfBenefitBenefitBalance>);
}
//# sourceMappingURL=ExplanationOfBenefitBenefitBalance.d.ts.map