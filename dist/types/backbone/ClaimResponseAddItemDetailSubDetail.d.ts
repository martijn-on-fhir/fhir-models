import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
export declare class ClaimResponseAddItemDetailSubDetail extends BackboneElement {
    adjudication?: ClaimResponseItemAdjudication[];
    factor?: number;
    modifier?: CodeableConcept[];
    net?: Money;
    noteNumber?: number[];
    productOrService?: CodeableConcept;
    quantity?: Quantity;
    unitPrice?: Money;
    constructor(source?: Partial<ClaimResponseAddItemDetailSubDetail>);
}
//# sourceMappingURL=ClaimResponseAddItemDetailSubDetail.d.ts.map