import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
export interface DetectedIssueEvidence extends BackboneElement {

  /**
   * A manifestation that led to the recording of this detected issue.
   */
  code?: CodeableConcept[] | undefined;
  /**
   * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
   */
  detail?: Reference[] | undefined;

}