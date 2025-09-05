import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ClaimResponseAddItemDetailSubDetail } from './ClaimResponseAddItemDetailSubDetail';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
export declare class ClaimResponseAddItemDetail extends BackboneElement {
    adjudication?: ClaimResponseItemAdjudication[];
    factor?: number;
    modifier?: CodeableConcept[];
    net?: Money;
    noteNumber?: number[];
    productOrService?: CodeableConcept;
    quantity?: Quantity;
    subDetail?: ClaimResponseAddItemDetailSubDetail[];
    unitPrice?: Money;
    constructor(source?: Partial<ClaimResponseAddItemDetail>);
}
//# sourceMappingURL=ClaimResponseAddItemDetail.d.ts.map