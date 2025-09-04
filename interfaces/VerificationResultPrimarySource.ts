import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Information about the primary source(s) involved in validation.
 */
export interface VerificationResultPrimarySource extends BackboneElement {

  /**
   * Ability of the primary source to push updates/alerts (yes; no; undetermined).
   */
  canPushUpdates?: CodeableConcept | undefined;
  /**
   * Method for communicating with the primary source (manual; API; Push).
   */
  communicationMethod?: CodeableConcept[] | undefined;
  /**
   * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
   */
  pushTypeAvailable?: CodeableConcept[] | undefined;
  /**
   * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
   */
  type?: CodeableConcept[] | undefined;
  /**
   * When the target was validated against the primary source.
   */
  validationDate?: string | undefined;
  _validationDate?: Element | undefined;
  /**
   * Status of the validation of the target against the primary source (successful; failed; unknown).
   */
  validationStatus?: CodeableConcept | undefined;
  /**
   * Reference to the primary source.
   */
  who?: Reference | undefined;

}