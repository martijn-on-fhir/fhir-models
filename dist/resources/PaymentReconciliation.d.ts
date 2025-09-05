import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import { PaymentReconciliationDetail } from '../backbone/PaymentReconciliationDetail';
import { PaymentReconciliationProcessNote } from '../backbone/PaymentReconciliationProcessNote';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class PaymentReconciliation extends DomainResource {
    readonly resourceType: "PaymentReconciliation";
    created?: string;
    _created?: Element;
    detail?: PaymentReconciliationDetail[];
    disposition?: string;
    _disposition?: Element;
    formCode?: CodeableConcept;
    identifier?: Identifier[];
    outcome?: ('queued' | 'complete' | 'error' | 'partial');
    _outcome?: Element;
    paymentAmount?: Money;
    paymentDate?: string;
    _paymentDate?: Element;
    paymentIdentifier?: Identifier;
    paymentIssuer?: Reference;
    period?: Period;
    processNote?: PaymentReconciliationProcessNote[];
    request?: Reference;
    requestor?: Reference;
    status?: ('active' | 'cancelled' | 'draft' | 'entered-in-error');
    _status?: Element;
    constructor(source?: Partial<PaymentReconciliation>);
}
//# sourceMappingURL=PaymentReconciliation.d.ts.map