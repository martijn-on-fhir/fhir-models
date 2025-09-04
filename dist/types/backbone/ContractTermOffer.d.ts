import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContractTermOfferAnswer } from './ContractTermOfferAnswer';
import { ContractTermOfferParty } from './ContractTermOfferParty';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class ContractTermOffer extends BackboneElement {
    answer?: ContractTermOfferAnswer[];
    decision?: CodeableConcept;
    decisionMode?: CodeableConcept[];
    identifier?: Identifier[];
    linkId?: string[];
    _linkId?: Element[];
    party?: ContractTermOfferParty[];
    securityLabelNumber?: number[];
    text?: string;
    _text?: Element;
    topic?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<ContractTermOffer>);
}
//# sourceMappingURL=ContractTermOffer.d.ts.map