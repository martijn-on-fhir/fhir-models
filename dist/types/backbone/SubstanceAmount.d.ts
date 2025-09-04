import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { SubstanceAmountReferenceRange } from '../elements/SubstanceAmountReferenceRange';
export declare class SubstanceAmount extends BackboneElement {
    amountQuantity?: Quantity;
    amountRange?: Range;
    amountString?: string;
    _amountString?: Element;
    amountText?: string;
    _amountText?: Element;
    amountType?: CodeableConcept;
    referenceRange?: SubstanceAmountReferenceRange;
    constructor(source?: Partial<SubstanceAmount>);
}
//# sourceMappingURL=SubstanceAmount.d.ts.map