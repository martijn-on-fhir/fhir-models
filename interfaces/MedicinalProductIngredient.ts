import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MedicinalProductIngredientSpecifiedSubstance } from './MedicinalProductIngredientSpecifiedSubstance';
import { MedicinalProductIngredientSubstance } from './MedicinalProductIngredientSubstance';
import { Reference } from './Reference';

/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export interface MedicinalProductIngredient extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicinalProductIngredient';
  /**
   * If the ingredient is a known or suspected allergen.
   */
  allergenicIndicator?: boolean | undefined;
  _allergenicIndicator?: Element | undefined;
  /**
   * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
   */
  identifier?: Identifier | undefined;
  /**
   * Manufacturer of this Ingredient.
   */
  manufacturer?: Reference[] | undefined;
  /**
   * Ingredient role e.g. Active ingredient, excipient.
   */
  role: CodeableConcept;
  /**
   * A specified substance that comprises this ingredient.
   */
  specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstance[] | undefined;
  /**
   * The ingredient substance.
   */
  substance?: MedicinalProductIngredientSubstance | undefined;

}