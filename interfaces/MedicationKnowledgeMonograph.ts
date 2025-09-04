import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Associated documentation about the medication.
 */
export interface MedicationKnowledgeMonograph extends BackboneElement {

  /**
   * Associated documentation about the medication.
   */
  source?: Reference | undefined;
  /**
   * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
   */
  type?: CodeableConcept | undefined;

}