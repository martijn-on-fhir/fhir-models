import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * General specifications for this substance, including how it is related to other substances.
 */
export interface SubstanceSpecificationProperty extends BackboneElement {

  /**
   * Quantitative value for this property.
   */
  amountQuantity?: Quantity | undefined;
  /**
   * Quantitative value for this property.
   */
  amountString?: string | undefined;
  _amountString?: Element | undefined;
  /**
   * A category for this property, e.g. Physical, Chemical, Enzymatic.
   */
  category?: CodeableConcept | undefined;
  /**
   * Property type e.g. viscosity, pH, isoelectric point.
   */
  code?: CodeableConcept | undefined;
  /**
   * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
   */
  definingSubstanceReference?: Reference | undefined;
  /**
   * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
   */
  definingSubstanceCodeableConcept?: CodeableConcept | undefined;
  /**
   * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
   */
  parameters?: string | undefined;
  _parameters?: Element | undefined;

}