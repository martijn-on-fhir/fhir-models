import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Associated or related knowledge about a medication.
 */
export interface MedicationKnowledgeRelatedMedicationKnowledge extends BackboneElement {

  /**
   * Associated documentation about the associated medication knowledge.
   */
  reference: Reference[];
  /**
   * The category of the associated medication knowledge reference.
   */
  type: CodeableConcept;

}