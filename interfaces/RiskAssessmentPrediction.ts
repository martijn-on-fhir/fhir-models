import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Period } from './Period';
import { Range } from './Range';

/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export interface RiskAssessmentPrediction extends BackboneElement {

  /**
   * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
   */
  outcome?: CodeableConcept | undefined;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  probabilityDecimal?: number | undefined;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  probabilityRange?: Range | undefined;
  /**
   * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
   */
  qualitativeRisk?: CodeableConcept | undefined;
  /**
   * Additional information explaining the basis for the prediction.
   */
  rationale?: string | undefined;
  _rationale?: Element | undefined;
  /**
   * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
   */
  relativeRisk?: number | undefined;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  whenPeriod?: Period | undefined;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  whenRange?: Range | undefined;

}