import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Quantity } from './Quantity';

/**
 * Moiety, for structural modifications.
 */
export interface SubstanceSpecificationMoiety extends BackboneElement {

  /**
   * Quantitative value for this moiety.
   */
  amountQuantity?: Quantity | undefined;
  /**
   * Quantitative value for this moiety.
   */
  amountString?: string | undefined;
  _amountString?: Element | undefined;
  /**
   * Identifier by which this moiety substance is known.
   */
  identifier?: Identifier | undefined;
  /**
   * Molecular formula.
   */
  molecularFormula?: string | undefined;
  _molecularFormula?: Element | undefined;
  /**
   * Textual name for this moiety substance.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Optical activity type.
   */
  opticalActivity?: CodeableConcept | undefined;
  /**
   * Role that the moiety is playing.
   */
  role?: CodeableConcept | undefined;
  /**
   * Stereochemistry type.
   */
  stereochemistry?: CodeableConcept | undefined;

}