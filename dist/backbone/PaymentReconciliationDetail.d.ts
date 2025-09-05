import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import { Reference } from '../elements/Reference';
export declare class PaymentReconciliationDetail extends BackboneElement {
    amount?: Money;
    date?: string;
    _date?: Element;
    identifier?: Identifier;
    payee?: Reference;
    predecessor?: Identifier;
    request?: Reference;
    response?: Reference;
    responsible?: Reference;
    submitter?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<PaymentReconciliationDetail>);
}
//# sourceMappingURL=PaymentReconciliationDetail.d.ts.map