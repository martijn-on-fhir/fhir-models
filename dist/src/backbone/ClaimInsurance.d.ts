import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class ClaimInsurance extends BackboneElement {
    businessArrangement?: string;
    _businessArrangement?: Element;
    claimResponse?: Reference;
    coverage?: Reference;
    focal?: boolean;
    _focal?: Element;
    identifier?: Identifier;
    preAuthRef?: string[];
    _preAuthRef?: Element[];
    sequence?: number;
    constructor(source?: Partial<ClaimInsurance>);
}
//# sourceMappingURL=ClaimInsurance.d.ts.map