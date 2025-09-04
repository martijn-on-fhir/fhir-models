import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DetectedIssueEvidence } from '../backbone/DetectedIssueEvidence';
import { DetectedIssueMitigation } from '../backbone/DetectedIssueMitigation';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class DetectedIssue extends DomainResource {
    readonly resourceType: "DetectedIssue";
    author?: Reference;
    code?: CodeableConcept;
    detail?: string;
    _detail?: Element;
    evidence?: DetectedIssueEvidence[];
    identifiedDateTime?: string;
    _identifiedDateTime?: Element;
    identifiedPeriod?: Period;
    identifier?: Identifier[];
    implicated?: Reference[];
    mitigation?: DetectedIssueMitigation[];
    patient?: Reference;
    reference?: string;
    _reference?: Element;
    severity?: ('high' | 'moderate' | 'low');
    _severity?: Element;
    status?: ('registered' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'cancelled' | 'entered-in-error' | 'unknown');
    _status?: Element;
    constructor(source?: Partial<DetectedIssue>);
}
//# sourceMappingURL=DetectedIssue.d.ts.map