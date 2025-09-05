import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { InvoiceLineItem } from '../backbone/InvoiceLineItem';
import { InvoiceLineItemPriceComponent } from '../backbone/InvoiceLineItemPriceComponent';
import { InvoiceParticipant } from '../backbone/InvoiceParticipant';
import { Money } from '../elements/Money';
import { Reference } from '../elements/Reference';
export declare class Invoice extends DomainResource {
    readonly resourceType: "Invoice";
    account?: Reference;
    cancelledReason?: string;
    _cancelledReason?: Element;
    date?: string;
    _date?: Element;
    identifier?: Identifier[];
    issuer?: Reference;
    lineItem?: InvoiceLineItem[];
    note?: Annotation[];
    participant?: InvoiceParticipant[];
    paymentTerms?: string;
    _paymentTerms?: Element;
    recipient?: Reference;
    status?: ('draft' | 'issued' | 'balanced' | 'cancelled' | 'entered-in-error');
    _status?: Element;
    subject?: Reference;
    totalGross?: Money;
    totalNet?: Money;
    totalPriceComponent?: InvoiceLineItemPriceComponent[];
    type?: CodeableConcept;
    constructor(source?: Partial<Invoice>);
}
//# sourceMappingURL=Invoice.d.ts.map