import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Address } from '../elements/Address';
import { ClaimResponseAddItemDetail } from './ClaimResponseAddItemDetail';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class ClaimResponseAddItem extends BackboneElement {
    adjudication?: ClaimResponseItemAdjudication[];
    bodySite?: CodeableConcept;
    detail?: ClaimResponseAddItemDetail[];
    detailSequence?: number[];
    factor?: number;
    itemSequence?: number[];
    locationCodeableConcept?: CodeableConcept;
    locationAddress?: Address;
    locationReference?: Reference;
    modifier?: CodeableConcept[];
    net?: Money;
    noteNumber?: number[];
    productOrService?: CodeableConcept;
    programCode?: CodeableConcept[];
    provider?: Reference[];
    quantity?: Quantity;
    servicedDate?: string;
    _servicedDate?: Element;
    servicedPeriod?: Period;
    subdetailSequence?: number[];
    subSite?: CodeableConcept[];
    unitPrice?: Money;
    constructor(source?: Partial<ClaimResponseAddItem>);
}
//# sourceMappingURL=ClaimResponseAddItem.d.ts.map