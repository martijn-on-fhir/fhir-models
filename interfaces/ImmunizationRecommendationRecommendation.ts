import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { ImmunizationRecommendationRecommendationDateCriterion } from './ImmunizationRecommendationRecommendationDateCriterion';
import { Reference } from './Reference';

/**
 * Vaccine administration recommendations.
 */
export interface ImmunizationRecommendationRecommendation extends BackboneElement {

  /**
   * Vaccine(s) which should not be used to fulfill the recommendation.
   */
  contraindicatedVaccineCode?: CodeableConcept[] | undefined;
  /**
   * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   */
  dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[] | undefined;
  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumberPositiveInt?: number | undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumberString?: string | undefined;
  _doseNumberString?: Element | undefined;
  /**
   * The reason for the assigned forecast status.
   */
  forecastReason?: CodeableConcept[] | undefined;
  /**
   * Indicates the patient status with respect to the path to immunity for the target disease.
   */
  forecastStatus: CodeableConcept;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string | undefined;
  _series?: Element | undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesPositiveInt?: number | undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesString?: string | undefined;
  _seriesDosesString?: Element | undefined;
  /**
   * Immunization event history and/or evaluation that supports the status and recommendation.
   */
  supportingImmunization?: Reference[] | undefined;
  /**
   * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
   */
  supportingPatientInformation?: Reference[] | undefined;
  /**
   * The targeted disease for the recommendation.
   */
  targetDisease?: CodeableConcept | undefined;
  /**
   * Vaccine(s) or vaccine group that pertain to the recommendation.
   */
  vaccineCode?: CodeableConcept[] | undefined;

}