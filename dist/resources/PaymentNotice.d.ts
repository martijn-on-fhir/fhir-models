import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import { Reference } from '../elements/Reference';
export declare class PaymentNotice extends DomainResource {
    readonly resourceType: "PaymentNotice";
    amount?: Money;
    created?: string;
    _created?: Element;
    identifier?: Identifier[];
    payee?: Reference;
    payment?: Reference;
    paymentDate?: string;
    _paymentDate?: Element;
    paymentStatus?: CodeableConcept;
    provider?: Reference;
    recipient?: Reference;
    request?: Reference;
    response?: Reference;
    status?: ('active' | 'cancelled' | 'draft' | 'entered-in-error');
    _status?: Element;
    constructor(source?: Partial<PaymentNotice>);
}
//# sourceMappingURL=PaymentNotice.d.ts.map