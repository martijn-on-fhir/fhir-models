import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export interface ImmunizationEvaluation extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ImmunizationEvaluation';
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: Reference | undefined;
  /**
   * The date the evaluation of the vaccine administration event was performed.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * Additional information about the evaluation.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumberPositiveInt?: number | undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumberString?: string | undefined;
  _doseNumberString?: Element | undefined;
  /**
   * Indicates if the dose is valid or not valid with respect to the published recommendations.
   */
  doseStatus: CodeableConcept;
  /**
   * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
   */
  doseStatusReason?: CodeableConcept[] | undefined;
  /**
   * A unique identifier assigned to this immunization evaluation record.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The vaccine administration event being evaluated.
   */
  immunizationEvent: Reference;
  /**
   * The individual for whom the evaluation is being done.
   */
  patient: Reference;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string | undefined;
  _series?: Element | undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesPositiveInt?: number | undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesString?: string | undefined;
  _seriesDosesString?: Element | undefined;
  /**
   * Indicates the current status of the evaluation of the vaccination administration event.
   */
  status: ('completed'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * The vaccine preventable disease the dose is being evaluated against.
   */
  targetDisease: CodeableConcept;

}