import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Quantity } from './Quantity';

/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
export interface NutritionOrderOralDietNutrient extends BackboneElement {

  /**
   * The quantity of the specified nutrient to include in diet.
   */
  amount?: Quantity | undefined;
  /**
   * The nutrient that is being modified such as carbohydrate or sodium.
   */
  modifier?: CodeableConcept | undefined;

}