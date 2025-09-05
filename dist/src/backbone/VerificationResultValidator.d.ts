import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';
import { Signature } from '../elements/Signature';
export declare class VerificationResultValidator extends BackboneElement {
    attestationSignature?: Signature;
    identityCertificate?: string;
    _identityCertificate?: Element;
    organization?: Reference;
    constructor(source?: Partial<VerificationResultValidator>);
}
//# sourceMappingURL=VerificationResultValidator.d.ts.map