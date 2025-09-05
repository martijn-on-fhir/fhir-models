import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import { Timing } from '../backbone/Timing';
import { VerificationResultAttestation } from '../backbone/VerificationResultAttestation';
import { VerificationResultPrimarySource } from '../backbone/VerificationResultPrimarySource';
import { VerificationResultValidator } from '../backbone/VerificationResultValidator';
export declare class VerificationResult extends DomainResource {
    readonly resourceType: "VerificationResult";
    attestation?: VerificationResultAttestation;
    failureAction?: CodeableConcept;
    frequency?: Timing;
    lastPerformed?: string;
    _lastPerformed?: Element;
    need?: CodeableConcept;
    nextScheduled?: string;
    _nextScheduled?: Element;
    primarySource?: VerificationResultPrimarySource[];
    status?: ('attested' | 'validated' | 'in-process' | 'req-revalid' | 'val-fail' | 'reval-fail');
    _status?: Element;
    statusDate?: string;
    _statusDate?: Element;
    target?: Reference[];
    targetLocation?: string[];
    _targetLocation?: Element[];
    validationProcess?: CodeableConcept[];
    validationType?: CodeableConcept;
    validator?: VerificationResultValidator[];
    constructor(source?: Partial<VerificationResult>);
}
//# sourceMappingURL=VerificationResult.d.ts.map