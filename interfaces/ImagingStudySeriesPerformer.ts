import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export interface ImagingStudySeriesPerformer extends BackboneElement {

  /**
   * Indicates who or what performed the series.
   */
  actor: Reference;
  /**
   * Distinguishes the type of involvement of the performer in the series.
   */
  function?: CodeableConcept | undefined;

}