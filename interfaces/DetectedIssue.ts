import { CodeableConcept } from './CodeableConcept';
import { DetectedIssueEvidence } from './DetectedIssueEvidence';
import { DetectedIssueMitigation } from './DetectedIssueMitigation';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export interface DetectedIssue extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'DetectedIssue';
  /**
   * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   */
  author?: Reference | undefined;
  /**
   * Identifies the general type of issue identified.
   */
  code?: CodeableConcept | undefined;
  /**
   * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
   */
  detail?: string | undefined;
  _detail?: Element | undefined;
  /**
   * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
   */
  evidence?: DetectedIssueEvidence[] | undefined;
  /**
   * The date or period when the detected issue was initially identified.
   */
  identifiedDateTime?: string | undefined;
  _identifiedDateTime?: Element | undefined;
  /**
   * The date or period when the detected issue was initially identified.
   */
  identifiedPeriod?: Period | undefined;
  /**
   * Business identifier associated with the detected issue record.
   */
  identifier?: Identifier[] | undefined;
  /**
   * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
   */
  implicated?: Reference[] | undefined;
  /**
   * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
   */
  mitigation?: DetectedIssueMitigation[] | undefined;
  /**
   * Indicates the patient whose record the detected issue is associated with.
   */
  patient?: Reference | undefined;
  /**
   * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
   */
  reference?: string | undefined;
  _reference?: Element | undefined;
  /**
   * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   */
  severity?: ('high'|'moderate'|'low') | undefined;
  _severity?: Element | undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
   */
  status: ('registered'|'preliminary'|'final'|'amended'|'corrected'|'cancelled'|'entered-in-error'|'unknown');
  _status?: Element | undefined;

}