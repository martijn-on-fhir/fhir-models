import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * List of participants involved in the appointment.
 */
export interface AppointmentParticipant extends BackboneElement {

  /**
   * A Person, Location/HealthcareService or Device that is participating in the appointment.
   */
  actor?: Reference | undefined;
  /**
   * Participation period of the actor.
   */
  period?: Period | undefined;
  /**
   * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
   */
  required?: ('required'|'optional'|'information-only') | undefined;
  _required?: Element | undefined;
  /**
   * Participation status of the actor.
   */
  status: ('accepted'|'declined'|'tentative'|'needs-action');
  _status?: Element | undefined;
  /**
   * The role of the participant can be used to declare what the actor will be doing in the scope of this appointment.
   * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
   * This value SHALL be the same when creating an AppointmentResponse so that they can be matched, and subsequently update the Appointment.
   */
  type?: CodeableConcept[] | undefined;

}