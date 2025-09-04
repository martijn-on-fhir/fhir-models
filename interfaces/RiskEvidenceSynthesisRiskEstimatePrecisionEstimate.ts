import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * A description of the precision of the estimate for the effect.
 */
export interface RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends BackboneElement {

  /**
   * Lower bound of confidence interval.
   */
  from?: number | undefined;
  /**
   * Use 95 for a 95% confidence interval.
   */
  level?: number | undefined;
  /**
   * Upper bound of confidence interval.
   */
  to?: number | undefined;
  /**
   * Examples include confidence interval and interquartile range.
   */
  type?: CodeableConcept | undefined;

}