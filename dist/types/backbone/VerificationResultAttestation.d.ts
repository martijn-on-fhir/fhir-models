import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import { Signature } from '../elements/Signature';
export declare class VerificationResultAttestation extends BackboneElement {
    communicationMethod?: CodeableConcept;
    date?: string;
    _date?: Element;
    onBehalfOf?: Reference;
    proxyIdentityCertificate?: string;
    _proxyIdentityCertificate?: Element;
    proxySignature?: Signature;
    sourceIdentityCertificate?: string;
    _sourceIdentityCertificate?: Element;
    sourceSignature?: Signature;
    who?: Reference;
    constructor(source?: Partial<VerificationResultAttestation>);
}
//# sourceMappingURL=VerificationResultAttestation.d.ts.map