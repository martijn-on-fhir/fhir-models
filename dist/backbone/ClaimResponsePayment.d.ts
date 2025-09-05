import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
export declare class ClaimResponsePayment extends BackboneElement {
    adjustment?: Money;
    adjustmentReason?: CodeableConcept;
    amount?: Money;
    date?: string;
    _date?: Element;
    identifier?: Identifier;
    type?: CodeableConcept;
    constructor(source?: Partial<ClaimResponsePayment>);
}
//# sourceMappingURL=ClaimResponsePayment.d.ts.map