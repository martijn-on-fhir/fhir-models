import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Timing } from './Timing';

/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export interface CarePlanActivityDetail extends BackboneElement {

  /**
   * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
   */
  code?: CodeableConcept | undefined;
  /**
   * Identifies the quantity expected to be consumed in a given day.
   */
  dailyAmount?: Quantity | undefined;
  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
   */
  doNotPerform?: boolean | undefined;
  _doNotPerform?: Element | undefined;
  /**
   * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  goal?: Reference[] | undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  instantiatesCanonical?: string[] | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  /**
   * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
   */
  kind?: ('Appointment'|'CommunicationRequest'|'DeviceRequest'|'MedicationRequest'|'NutritionOrder'|'Task'|'ServiceRequest'|'VisionPrescription') | undefined;
  _kind?: Element | undefined;
  /**
   * May reference a specific clinical location or may identify a type of location.
   */
  location?: Reference | undefined;
  /**
   * A performer MAY also be a participant in the care plan.
   */
  performer?: Reference[] | undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productCodeableConcept?: CodeableConcept | undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productReference?: Reference | undefined;
  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  quantity?: Quantity | undefined;
  /**
   * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledTiming?: Timing | undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledPeriod?: Period | undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledString?: string | undefined;
  _scheduledString?: Element | undefined;
  /**
   * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
   */
  status: ('not-started'|'scheduled'|'in-progress'|'on-hold'|'completed'|'cancelled'|'stopped'|'unknown'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
   */
  statusReason?: CodeableConcept | undefined;

}