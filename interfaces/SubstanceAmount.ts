import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { In } from './In';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { SubstanceAmountReferenceRange } from './SubstanceAmountReferenceRange';

/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 */
export interface SubstanceAmount extends BackboneElement {

  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   */
  amountQuantity?: Quantity | undefined;
  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   */
  amountRange?: Range | undefined;
  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   */
  amountString?: string | undefined;
  _amountString?: Element | undefined;
  /**
   * A textual comment on a numeric value.
   */
  amountText?: string | undefined;
  _amountText?: Element | undefined;
  /**
   * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.
   */
  amountType?: CodeableConcept | undefined;
  /**
   * Reference range of possible or expected values.
   */
  referenceRange?: SubstanceAmountReferenceRange | undefined;

}