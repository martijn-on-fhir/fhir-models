import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
export declare class ExplanationOfBenefitPayment extends BackboneElement {
    adjustment?: Money;
    adjustmentReason?: CodeableConcept;
    amount?: Money;
    date?: string;
    _date?: Element;
    identifier?: Identifier;
    type?: CodeableConcept;
    constructor(source?: Partial<ExplanationOfBenefitPayment>);
}
//# sourceMappingURL=ExplanationOfBenefitPayment.d.ts.map