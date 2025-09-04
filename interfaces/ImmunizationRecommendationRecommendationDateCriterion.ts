import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export interface ImmunizationRecommendationRecommendationDateCriterion extends BackboneElement {

  /**
   * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   */
  code: CodeableConcept;
  /**
   * The date whose meaning is specified by dateCriterion.code.
   */
  value: string;
  _value?: Element | undefined;

}