import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Indicates who or what performed the event.
 */
export interface MedicationDispensePerformer extends BackboneElement {

  /**
   * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
   */
  actor: Reference;
  /**
   * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
   */
  function?: CodeableConcept | undefined;

}