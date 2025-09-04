import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
export declare class InvoiceLineItemPriceComponent extends BackboneElement {
    amount?: Money;
    code?: CodeableConcept;
    factor?: number;
    type?: ('base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational');
    _type?: Element;
    constructor(source?: Partial<InvoiceLineItemPriceComponent>);
}
//# sourceMappingURL=InvoiceLineItemPriceComponent.d.ts.map