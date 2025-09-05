import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';
export declare class ConsentVerification extends BackboneElement {
    verificationDate?: string;
    _verificationDate?: Element;
    verified?: boolean;
    _verified?: Element;
    verifiedWith?: Reference;
    constructor(source?: Partial<ConsentVerification>);
}
//# sourceMappingURL=ConsentVerification.d.ts.map