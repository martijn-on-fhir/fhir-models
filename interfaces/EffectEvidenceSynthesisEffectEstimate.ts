import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { EffectEvidenceSynthesisEffectEstimatePrecisionEstimate } from './EffectEvidenceSynthesisEffectEstimatePrecisionEstimate';
import { Element } from './Element';

/**
 * The estimated effect of the exposure variant.
 */
export interface EffectEvidenceSynthesisEffectEstimate extends BackboneElement {

  /**
   * Human-readable summary of effect estimate.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * A description of the precision of the estimate for the effect.
   */
  precisionEstimate?: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[] | undefined;
  /**
   * Examples include relative risk and mean difference.
   */
  type?: CodeableConcept | undefined;
  /**
   * Specifies the UCUM unit for the outcome.
   */
  unitOfMeasure?: CodeableConcept | undefined;
  /**
   * The point estimate of the effect estimate.
   */
  value?: number | undefined;
  /**
   * Used to define variant exposure states such as low-risk state.
   */
  variantState?: CodeableConcept | undefined;

}