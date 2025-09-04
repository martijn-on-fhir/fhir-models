import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength } from './MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength';
import { Ratio } from './Ratio';

/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrength extends BackboneElement {

  /**
   * The strength per unitary volume (or mass).
   */
  concentration?: Ratio | undefined;
  /**
   * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
   */
  concentrationLowLimit?: Ratio | undefined;
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
   * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
   */
  presentation: Ratio;
  /**
   * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
   */
  presentationLowLimit?: Ratio | undefined;
  /**
   * Strength expressed in terms of a reference substance.
   */
  referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[] | undefined;

}