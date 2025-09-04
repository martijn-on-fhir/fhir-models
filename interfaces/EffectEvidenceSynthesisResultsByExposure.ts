import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * A description of the results for each exposure considered in the effect estimate.
 */
export interface EffectEvidenceSynthesisResultsByExposure extends BackboneElement {

  /**
   * Human-readable summary of results by exposure state.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Whether these results are for the exposure state or alternative exposure state.
   */
  exposureState?: ('exposure'|'exposure-alternative') | undefined;
  _exposureState?: Element | undefined;
  /**
   * Reference to a RiskEvidenceSynthesis resource.
   */
  riskEvidenceSynthesis: Reference;
  /**
   * Used to define variant exposure states such as low-risk state.
   */
  variantState?: CodeableConcept | undefined;

}