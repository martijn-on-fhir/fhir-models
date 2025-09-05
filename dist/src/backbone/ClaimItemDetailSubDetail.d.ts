import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class ClaimItemDetailSubDetail extends BackboneElement {
    category?: CodeableConcept;
    factor?: number;
    modifier?: CodeableConcept[];
    net?: Money;
    productOrService?: CodeableConcept;
    programCode?: CodeableConcept[];
    quantity?: Quantity;
    revenue?: CodeableConcept;
    sequence?: number;
    udi?: Reference[];
    unitPrice?: Money;
    constructor(source?: Partial<ClaimItemDetailSubDetail>);
}
//# sourceMappingURL=ClaimItemDetailSubDetail.d.ts.map