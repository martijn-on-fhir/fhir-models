import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { ImmunizationRecommendationRecommendation } from './ImmunizationRecommendationRecommendation';
import { Reference } from './Reference';

/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export interface ImmunizationRecommendation extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ImmunizationRecommendation';
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: Reference | undefined;
  /**
   * The date the immunization recommendation(s) were created.
   */
  date: string;
  _date?: Element | undefined;
  /**
   * A unique identifier assigned to this particular recommendation record.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The patient the recommendation(s) are for.
   */
  patient: Reference;
  /**
   * Vaccine administration recommendations.
   */
  recommendation: ImmunizationRecommendationRecommendation[];

}