import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContractTermAction } from './ContractTermAction';
import { ContractTermAsset } from './ContractTermAsset';
import { ContractTermOffer } from './ContractTermOffer';
import { ContractTermSecurityLabel } from './ContractTermSecurityLabel';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class ContractTerm extends BackboneElement {
    action?: ContractTermAction[];
    applies?: Period;
    asset?: ContractTermAsset[];
    group?: ContractTerm[];
    identifier?: Identifier;
    issued?: string;
    _issued?: Element;
    offer?: ContractTermOffer;
    securityLabel?: ContractTermSecurityLabel[];
    subType?: CodeableConcept;
    text?: string;
    _text?: Element;
    topicCodeableConcept?: CodeableConcept;
    topicReference?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<ContractTerm>);
}
//# sourceMappingURL=ContractTerm.d.ts.map