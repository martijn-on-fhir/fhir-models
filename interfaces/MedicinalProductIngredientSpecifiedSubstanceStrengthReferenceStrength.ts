import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Ratio } from './Ratio';

/**
 * Strength expressed in terms of a reference substance.
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends BackboneElement {

  /**
   * The country or countries for which the strength range applies.
   */
  country?: CodeableConcept[] | undefined;
  /**
   * For when strength is measured at a particular point or distance.
   */
  measurementPoint?: string | undefined;
  _measurementPoint?: Element | undefined;
  /**
   * Strength expressed in terms of a reference substance.
   */
  strength: Ratio;
  /**
   * Strength expressed in terms of a reference substance.
   */
  strengthLowLimit?: Ratio | undefined;
  /**
   * Relevant reference substance.
   */
  substance?: CodeableConcept | undefined;

}