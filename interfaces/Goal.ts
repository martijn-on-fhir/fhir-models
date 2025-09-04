import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { GoalTarget } from './GoalTarget';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export interface Goal extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Goal';
  /**
   * Describes the progression, or lack thereof, towards the goal against the target.
   */
  achievementStatus?: CodeableConcept | undefined;
  /**
   * The identified conditions and other health record elements that are intended to be addressed by the goal.
   */
  addresses?: Reference[] | undefined;
  /**
   * Indicates a category the goal falls within.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * If no code is available, use CodeableConcept.text.
   */
  description: CodeableConcept;
  /**
   * This is the individual responsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
   */
  expressedBy?: Reference | undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: Identifier[] | undefined;
  /**
   * This element is labeled as a modifier because the lifecycleStatus contains codes that mark the resource as not currently valid.
   */
  lifecycleStatus: ('proposed'|'planned'|'accepted'|'active'|'on-hold'|'completed'|'cancelled'|'entered-in-error'|'rejected');
  _lifecycleStatus?: Element | undefined;
  /**
   * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
   */
  note?: Annotation[] | undefined;
  /**
   * Note that this should not duplicate the goal status.
   */
  outcomeCode?: CodeableConcept[] | undefined;
  /**
   * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
   */
  outcomeReference?: Reference[] | undefined;
  /**
   * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
   * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
   */
  priority?: CodeableConcept | undefined;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  startDate?: string | undefined;
  _startDate?: Element | undefined;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  startCodeableConcept?: CodeableConcept | undefined;
  /**
   * To see the date for past statuses, query history.
   */
  statusDate?: string | undefined;
  _statusDate?: Element | undefined;
  /**
   * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
   */
  statusReason?: string | undefined;
  _statusReason?: Element | undefined;
  /**
   * Identifies the patient, group or organization for whom the goal is being established.
   */
  subject: Reference;
  /**
   * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
   */
  target?: GoalTarget[] | undefined;

}