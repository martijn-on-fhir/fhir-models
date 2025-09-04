import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { MedicinalProductIngredientSpecifiedSubstanceStrength } from './MedicinalProductIngredientSpecifiedSubstanceStrength';

/**
 * The ingredient substance.
 */
export interface MedicinalProductIngredientSubstance extends BackboneElement {

  /**
   * The ingredient substance.
   */
  code: CodeableConcept;
  /**
   * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
   */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;

}