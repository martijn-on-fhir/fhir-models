import { Annotation } from './Annotation';
import { CarePlanActivity } from './CarePlanActivity';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export interface CarePlan extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'CarePlan';
  /**
   * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
   */
  activity?: CarePlanActivity[] | undefined;
  /**
   * When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be used. However, to be actionable for decision support, using Condition alone is not sufficient as the allergy or intolerance condition needs to be represented as an AllergyIntolerance.
   */
  addresses?: Reference[] | undefined;
  /**
   * The author may also be a contributor.  For example, an organization can be an author, but not listed as a contributor.
   */
  author?: Reference | undefined;
  /**
   * A care plan that is fulfilled in whole or in part by this care plan.
   */
  basedOn?: Reference[] | undefined;
  /**
   * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   */
  careTeam?: Reference[] | undefined;
  /**
   * There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * Collaborative care plans may have multiple contributors.
   */
  contributor?: Reference[] | undefined;
  /**
   * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
   */
  created?: string | undefined;
  _created?: Element | undefined;
  /**
   * A description of the scope and nature of the plan.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. CarePlan activities conducted as a result of the care plan may well occur as part of other encounters.
   */
  encounter?: Reference | undefined;
  /**
   * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
   */
  goal?: Reference[] | undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   */
  instantiatesCanonical?: string[] | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  /**
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  intent: ('proposal'|'plan'|'order'|'option');
  _intent?: Element | undefined;
  /**
   * General notes about the care plan not covered elsewhere.
   */
  note?: Annotation[] | undefined;
  /**
   * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
   */
  partOf?: Reference[] | undefined;
  /**
   * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
   */
  period?: Period | undefined;
  /**
   * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
   */
  replaces?: Reference[] | undefined;
  /**
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the plan as not currently valid.
   */
  status: ('draft'|'active'|'on-hold'|'revoked'|'completed'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * Identifies the patient or group whose intended care is described by the plan.
   */
  subject: Reference;
  /**
   * Use "concern" to identify specific conditions addressed by the care plan.
   */
  supportingInfo?: Reference[] | undefined;
  /**
   * Human-friendly name for the care plan.
   */
  title?: string | undefined;
  _title?: Element | undefined;

}