import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { InvoiceLineItemPriceComponent } from './InvoiceLineItemPriceComponent';
import { Reference } from '../elements/Reference';
export declare class InvoiceLineItem extends BackboneElement {
    chargeItemReference?: Reference;
    chargeItemCodeableConcept?: CodeableConcept;
    priceComponent?: InvoiceLineItemPriceComponent[];
    sequence?: number;
    constructor(source?: Partial<InvoiceLineItem>);
}
//# sourceMappingURL=InvoiceLineItem.d.ts.map