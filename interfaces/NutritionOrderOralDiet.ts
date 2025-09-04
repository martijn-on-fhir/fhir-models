import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { NutritionOrderOralDietNutrient } from './NutritionOrderOralDietNutrient';
import { NutritionOrderOralDietTexture } from './NutritionOrderOralDietTexture';
import { Timing } from './Timing';

/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export interface NutritionOrderOralDiet extends BackboneElement {

  /**
   * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
   */
  fluidConsistencyType?: CodeableConcept[] | undefined;
  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  instruction?: string | undefined;
  _instruction?: Element | undefined;
  /**
   * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
   */
  nutrient?: NutritionOrderOralDietNutrient[] | undefined;
  /**
   * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
   */
  schedule?: Timing[] | undefined;
  /**
   * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
   */
  texture?: NutritionOrderOralDietTexture[] | undefined;
  /**
   * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
   */
  type?: CodeableConcept[] | undefined;

}