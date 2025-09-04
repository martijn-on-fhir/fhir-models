import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { NutritionOrderEnteralFormulaAdministration } from './NutritionOrderEnteralFormulaAdministration';
import { Quantity } from './Quantity';

/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export interface NutritionOrderEnteralFormula extends BackboneElement {

  /**
   * The product or brand name of the type of modular component to be added to the formula.
   */
  additiveProductName?: string | undefined;
  _additiveProductName?: Element | undefined;
  /**
   * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
   */
  additiveType?: CodeableConcept | undefined;
  /**
   * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
   */
  administration?: NutritionOrderEnteralFormulaAdministration[] | undefined;
  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  administrationInstruction?: string | undefined;
  _administrationInstruction?: Element | undefined;
  /**
   * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
   */
  baseFormulaProductName?: string | undefined;
  _baseFormulaProductName?: Element | undefined;
  /**
   * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
   */
  baseFormulaType?: CodeableConcept | undefined;
  /**
   * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
   */
  caloricDensity?: Quantity | undefined;
  /**
   * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
   */
  maxVolumeToDeliver?: Quantity | undefined;
  /**
   * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
   */
  routeofAdministration?: CodeableConcept | undefined;

}