import { Age } from './Age';
import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { ConditionEvidence } from './ConditionEvidence';
import { ConditionStage } from './ConditionStage';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Range } from './Range';
import { Reference } from './Reference';

/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
export interface Condition extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Condition';
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementDateTime?: string | undefined;
  _abatementDateTime?: Element | undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementAge?: Age | undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementPeriod?: Period | undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementRange?: Range | undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementString?: string | undefined;
  _abatementString?: Element | undefined;
  /**
   * Individual who is making the condition statement.
   */
  asserter?: Reference | undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  bodySite?: CodeableConcept[] | undefined;
  /**
   * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  clinicalStatus?: CodeableConcept | undefined;
  /**
   * Identification of the condition, problem or diagnosis.
   */
  code?: CodeableConcept | undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
   */
  encounter?: Reference | undefined;
  /**
   * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
   */
  evidence?: ConditionEvidence[] | undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
   */
  note?: Annotation[] | undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetDateTime?: string | undefined;
  _onsetDateTime?: Element | undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetAge?: Age | undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetPeriod?: Period | undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetRange?: Range | undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetString?: string | undefined;
  _onsetString?: Element | undefined;
  /**
   * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
   */
  recordedDate?: string | undefined;
  _recordedDate?: Element | undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: Reference | undefined;
  /**
   * Coding of the severity with a terminology is preferred, where possible.
   */
  severity?: CodeableConcept | undefined;
  /**
   * Clinical stage or grade of a condition. May include formal severity assessments.
   */
  stage?: ConditionStage[] | undefined;
  /**
   * Indicates the patient or group who the condition record is associated with.
   */
  subject: Reference;
  /**
   * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
   * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  verificationStatus?: CodeableConcept | undefined;

}