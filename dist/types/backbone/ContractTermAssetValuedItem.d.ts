import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class ContractTermAssetValuedItem extends BackboneElement {
    effectiveTime?: string;
    _effectiveTime?: Element;
    entityCodeableConcept?: CodeableConcept;
    entityReference?: Reference;
    factor?: number;
    identifier?: Identifier;
    linkId?: string[];
    _linkId?: Element[];
    net?: Money;
    payment?: string;
    _payment?: Element;
    paymentDate?: string;
    _paymentDate?: Element;
    points?: number;
    quantity?: Quantity;
    recipient?: Reference;
    responsible?: Reference;
    securityLabelNumber?: number[];
    unitPrice?: Money;
    constructor(source?: Partial<ContractTermAssetValuedItem>);
}
//# sourceMappingURL=ContractTermAssetValuedItem.d.ts.map