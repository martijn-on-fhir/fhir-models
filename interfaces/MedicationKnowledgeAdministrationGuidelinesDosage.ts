import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Dosage } from './Dosage';

/**
 * Dosage for the medication for the specific guidelines.
 */
export interface MedicationKnowledgeAdministrationGuidelinesDosage extends BackboneElement {

  /**
   * Dosage for the medication for the specific guidelines.
   */
  dosage: Dosage[];
  /**
   * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
   */
  type: CodeableConcept;

}