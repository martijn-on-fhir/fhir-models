import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContractTermAssetContext } from './ContractTermAssetContext';
import { ContractTermAssetValuedItem } from './ContractTermAssetValuedItem';
import { ContractTermOfferAnswer } from './ContractTermOfferAnswer';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class ContractTermAsset extends BackboneElement {
    answer?: ContractTermOfferAnswer[];
    condition?: string;
    _condition?: Element;
    context?: ContractTermAssetContext[];
    linkId?: string[];
    _linkId?: Element[];
    period?: Period[];
    periodType?: CodeableConcept[];
    relationship?: Coding;
    scope?: CodeableConcept;
    securityLabelNumber?: number[];
    subtype?: CodeableConcept[];
    text?: string;
    _text?: Element;
    type?: CodeableConcept[];
    typeReference?: Reference[];
    usePeriod?: Period[];
    valuedItem?: ContractTermAssetValuedItem[];
    constructor(source?: Partial<ContractTermAsset>);
}
//# sourceMappingURL=ContractTermAsset.d.ts.map