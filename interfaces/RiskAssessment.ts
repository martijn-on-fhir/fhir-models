import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';
import { RiskAssessmentPrediction } from './RiskAssessmentPrediction';

/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export interface RiskAssessment extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'RiskAssessment';
  /**
   * A reference to the request that is fulfilled by this risk assessment.
   */
  basedOn?: Reference | undefined;
  /**
   * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
   */
  basis?: Reference[] | undefined;
  /**
   * The type of the risk assessment performed.
   */
  code?: CodeableConcept | undefined;
  /**
   * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
   */
  condition?: Reference | undefined;
  /**
   * The encounter where the assessment was performed.
   */
  encounter?: Reference | undefined;
  /**
   * Business identifier assigned to the risk assessment.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The algorithm, process or mechanism used to evaluate the risk.
   */
  method?: CodeableConcept | undefined;
  /**
   * A description of the steps that might be taken to reduce the identified risk(s).
   */
  mitigation?: string | undefined;
  _mitigation?: Element | undefined;
  /**
   * Additional comments about the risk assessment.
   */
  note?: Annotation[] | undefined;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  occurrenceDateTime?: string | undefined;
  _occurrenceDateTime?: Element | undefined;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  occurrencePeriod?: Period | undefined;
  /**
   * A reference to a resource that this risk assessment is part of, such as a Procedure.
   */
  parent?: Reference | undefined;
  /**
   * The provider or software application that performed the assessment.
   */
  performer?: Reference | undefined;
  /**
   * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
   */
  prediction?: RiskAssessmentPrediction[] | undefined;
  /**
   * The reason the risk assessment was performed.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Resources supporting the reason the risk assessment was performed.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The status of the RiskAssessment, using the same statuses as an Observation.
   */
  status: ('registered'|'preliminary'|'final'|'amended'|'corrected'|'cancelled'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * The patient or group the risk assessment applies to.
   */
  subject: Reference;

}