import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export interface ClinicalImpressionFinding extends BackboneElement {

  /**
   * Which investigations support finding or diagnosis.
   */
  basis?: string | undefined;
  _basis?: Element | undefined;
  /**
   * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
   */
  itemCodeableConcept?: CodeableConcept | undefined;
  /**
   * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
   */
  itemReference?: Reference | undefined;

}