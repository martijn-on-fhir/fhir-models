import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ExplanationOfBenefitAddItemDetailSubDetail } from './ExplanationOfBenefitAddItemDetailSubDetail';
import { ExplanationOfBenefitItemAdjudication } from './ExplanationOfBenefitItemAdjudication';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
export declare class ExplanationOfBenefitAddItemDetail extends BackboneElement {
    adjudication?: ExplanationOfBenefitItemAdjudication[];
    factor?: number;
    modifier?: CodeableConcept[];
    net?: Money;
    noteNumber?: number[];
    productOrService?: CodeableConcept;
    quantity?: Quantity;
    subDetail?: ExplanationOfBenefitAddItemDetailSubDetail[];
    unitPrice?: Money;
    constructor(source?: Partial<ExplanationOfBenefitAddItemDetail>);
}
//# sourceMappingURL=ExplanationOfBenefitAddItemDetail.d.ts.map