import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { MedicationKnowledgeAdministrationGuidelinesDosage } from './MedicationKnowledgeAdministrationGuidelinesDosage';
import { MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics } from './MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics';
import { Reference } from './Reference';

/**
 * Guidelines for the administration of the medication.
 */
export interface MedicationKnowledgeAdministrationGuidelines extends BackboneElement {

  /**
   * Dosage for the medication for the specific guidelines.
   */
  dosage?: MedicationKnowledgeAdministrationGuidelinesDosage[] | undefined;
  /**
   * Indication for use that apply to the specific administration guidelines.
   */
  indicationCodeableConcept?: CodeableConcept | undefined;
  /**
   * Indication for use that apply to the specific administration guidelines.
   */
  indicationReference?: Reference | undefined;
  /**
   * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
   */
  patientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[] | undefined;

}