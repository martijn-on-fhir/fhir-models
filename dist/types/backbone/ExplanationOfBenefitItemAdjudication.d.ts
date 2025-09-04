import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
export declare class ExplanationOfBenefitItemAdjudication extends BackboneElement {
    amount?: Money;
    category?: CodeableConcept;
    reason?: CodeableConcept;
    value?: number;
    constructor(source?: Partial<ExplanationOfBenefitItemAdjudication>);
}
//# sourceMappingURL=ExplanationOfBenefitItemAdjudication.d.ts.map