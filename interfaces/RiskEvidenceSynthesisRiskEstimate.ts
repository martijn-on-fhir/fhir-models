import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { RiskEvidenceSynthesisRiskEstimatePrecisionEstimate } from './RiskEvidenceSynthesisRiskEstimatePrecisionEstimate';

/**
 * The estimated risk of the outcome.
 */
export interface RiskEvidenceSynthesisRiskEstimate extends BackboneElement {

  /**
   * The sample size for the group that was measured for this risk estimate.
   */
  denominatorCount?: number | undefined;
  /**
   * Human-readable summary of risk estimate.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The number of group members with the outcome of interest.
   */
  numeratorCount?: number | undefined;
  /**
   * A description of the precision of the estimate for the effect.
   */
  precisionEstimate?: RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[] | undefined;
  /**
   * Examples include proportion and mean.
   */
  type?: CodeableConcept | undefined;
  /**
   * Specifies the UCUM unit for the outcome.
   */
  unitOfMeasure?: CodeableConcept | undefined;
  /**
   * The point estimate of the risk estimate.
   */
  value?: number | undefined;

}