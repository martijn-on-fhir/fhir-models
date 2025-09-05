import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ExplanationOfBenefitItemAdjudication } from './ExplanationOfBenefitItemAdjudication';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
export declare class ExplanationOfBenefitAddItemDetailSubDetail extends BackboneElement {
    adjudication?: ExplanationOfBenefitItemAdjudication[];
    factor?: number;
    modifier?: CodeableConcept[];
    net?: Money;
    noteNumber?: number[];
    productOrService?: CodeableConcept;
    quantity?: Quantity;
    unitPrice?: Money;
    constructor(source?: Partial<ExplanationOfBenefitAddItemDetailSubDetail>);
}
//# sourceMappingURL=ExplanationOfBenefitAddItemDetailSubDetail.d.ts.map