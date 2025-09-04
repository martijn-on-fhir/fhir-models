import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Indicates who or what performed the medication administration and how they were involved.
 */
export interface MedicationAdministrationPerformer extends BackboneElement {

  /**
   * Indicates who or what performed the medication administration.
   */
  actor: Reference;
  /**
   * Distinguishes the type of involvement of the performer in the medication administration.
   */
  function?: CodeableConcept | undefined;

}