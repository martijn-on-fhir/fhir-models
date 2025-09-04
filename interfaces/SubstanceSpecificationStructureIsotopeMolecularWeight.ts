import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Quantity } from './Quantity';

/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export interface SubstanceSpecificationStructureIsotopeMolecularWeight extends BackboneElement {

  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   */
  amount?: Quantity | undefined;
  /**
   * The method by which the molecular weight was determined.
   */
  method?: CodeableConcept | undefined;
  /**
   * Type of molecular weight such as exact, average (also known as. number average), weight average.
   */
  type?: CodeableConcept | undefined;

}