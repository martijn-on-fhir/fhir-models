import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * Categorization of the medication within a formulary or classification system.
 */
export interface MedicationKnowledgeMedicineClassification extends BackboneElement {

  /**
   * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
   */
  classification?: CodeableConcept[] | undefined;
  /**
   * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
   */
  type: CodeableConcept;

}