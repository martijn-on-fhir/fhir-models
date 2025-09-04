import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * Errors encountered during the processing of the request.
 */
export interface CoverageEligibilityResponseError extends BackboneElement {

  /**
   * An error code,from a specified code system, which details why the eligibility check could not be performed.
   */
  code: CodeableConcept;

}