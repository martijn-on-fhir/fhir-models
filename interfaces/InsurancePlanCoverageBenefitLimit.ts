import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Quantity } from './Quantity';

/**
 * The specific limits on the benefit.
 */
export interface InsurancePlanCoverageBenefitLimit extends BackboneElement {

  /**
   * Use `CodeableConcept.text` element if the data is free (uncoded) text.
   */
  code?: CodeableConcept | undefined;
  /**
   * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
   */
  value?: Quantity | undefined;

}