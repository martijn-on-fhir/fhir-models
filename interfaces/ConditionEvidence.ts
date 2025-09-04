import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export interface ConditionEvidence extends BackboneElement {

  /**
   * A manifestation or symptom that led to the recording of this condition.
   */
  code?: CodeableConcept[] | undefined;
  /**
   * Links to other relevant information, including pathology reports.
   */
  detail?: Reference[] | undefined;

}