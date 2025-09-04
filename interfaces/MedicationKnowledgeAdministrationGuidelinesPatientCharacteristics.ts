import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Quantity } from './Quantity';

/**
 * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 */
export interface MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends BackboneElement {

  /**
   * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
   */
  characteristicCodeableConcept?: CodeableConcept | undefined;
  /**
   * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
   */
  characteristicQuantity?: Quantity | undefined;
  /**
   * The specific characteristic (e.g. height, weight, gender, etc.).
   */
  value?: string[] | undefined;
  _value?: Element[] | undefined;

}