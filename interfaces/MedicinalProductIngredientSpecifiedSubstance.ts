import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { MedicinalProductIngredientSpecifiedSubstanceStrength } from './MedicinalProductIngredientSpecifiedSubstanceStrength';

/**
 * A specified substance that comprises this ingredient.
 */
export interface MedicinalProductIngredientSpecifiedSubstance extends BackboneElement {

  /**
   * The specified substance.
   */
  code: CodeableConcept;
  /**
   * Confidentiality level of the specified substance as the ingredient.
   */
  confidentiality?: CodeableConcept | undefined;
  /**
   * The group of specified substance, e.g. group 1 to 4.
   */
  group: CodeableConcept;
  /**
   * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
   */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;

}