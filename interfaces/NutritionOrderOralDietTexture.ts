import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export interface NutritionOrderOralDietTexture extends BackboneElement {

  /**
   * Coupled with the `texture.modifier`; could be (All Foods).
   */
  foodType?: CodeableConcept | undefined;
  /**
   * Coupled with the foodType (Meat).
   */
  modifier?: CodeableConcept | undefined;

}