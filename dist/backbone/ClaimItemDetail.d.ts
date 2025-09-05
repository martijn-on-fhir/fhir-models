import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ClaimItemDetailSubDetail } from './ClaimItemDetailSubDetail';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class ClaimItemDetail extends BackboneElement {
    category?: CodeableConcept;
    factor?: number;
    modifier?: CodeableConcept[];
    net?: Money;
    productOrService?: CodeableConcept;
    programCode?: CodeableConcept[];
    quantity?: Quantity;
    revenue?: CodeableConcept;
    sequence?: number;
    subDetail?: ClaimItemDetailSubDetail[];
    udi?: Reference[];
    unitPrice?: Money;
    constructor(source?: Partial<ClaimItemDetail>);
}
//# sourceMappingURL=ClaimItemDetail.d.ts.map