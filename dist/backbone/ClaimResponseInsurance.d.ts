import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
export declare class ClaimResponseInsurance extends BackboneElement {
    businessArrangement?: string;
    _businessArrangement?: Element;
    claimResponse?: Reference;
    coverage?: Reference;
    focal?: boolean;
    _focal?: Element;
    sequence?: number;
    constructor(source?: Partial<ClaimResponseInsurance>);
}
//# sourceMappingURL=ClaimResponseInsurance.d.ts.map