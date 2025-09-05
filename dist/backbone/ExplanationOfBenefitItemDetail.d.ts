import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ExplanationOfBenefitItemAdjudication } from './ExplanationOfBenefitItemAdjudication';
import { ExplanationOfBenefitItemDetailSubDetail } from './ExplanationOfBenefitItemDetailSubDetail';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class ExplanationOfBenefitItemDetail extends BackboneElement {
    adjudication?: ExplanationOfBenefitItemAdjudication[];
    category?: CodeableConcept;
    factor?: number;
    modifier?: CodeableConcept[];
    net?: Money;
    noteNumber?: number[];
    productOrService?: CodeableConcept;
    programCode?: CodeableConcept[];
    quantity?: Quantity;
    revenue?: CodeableConcept;
    sequence?: number;
    subDetail?: ExplanationOfBenefitItemDetailSubDetail[];
    udi?: Reference[];
    unitPrice?: Money;
    constructor(source?: Partial<ExplanationOfBenefitItemDetail>);
}
//# sourceMappingURL=ExplanationOfBenefitItemDetail.d.ts.map