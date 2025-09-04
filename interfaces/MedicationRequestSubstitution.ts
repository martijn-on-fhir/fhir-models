import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
 */
export interface MedicationRequestSubstitution extends BackboneElement {

  /**
   * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
   */
  allowedBoolean?: boolean | undefined;
  _allowedBoolean?: Element | undefined;
  /**
   * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
   */
  allowedCodeableConcept?: CodeableConcept | undefined;
  /**
   * Indicates the reason for the substitution, or why substitution must or must not be performed.
   */
  reason?: CodeableConcept | undefined;

}