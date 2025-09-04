import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Period } from './Period';

/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export interface CoverageCostToBeneficiaryException extends BackboneElement {

  /**
   * The timeframe during when the exception is in force.
   */
  period?: Period | undefined;
  /**
   * The code for the specific exception.
   */
  type: CodeableConcept;

}