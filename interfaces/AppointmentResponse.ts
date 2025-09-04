import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export interface AppointmentResponse extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'AppointmentResponse';
  /**
   * A Person, Location, HealthcareService, or Device that is participating in the appointment.
   */
  actor?: Reference | undefined;
  /**
   * Appointment that this response is replying to.
   */
  appointment: Reference;
  /**
   * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
   */
  end?: string | undefined;
  _end?: Element | undefined;
  /**
   * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
   */
  identifier?: Identifier[] | undefined;
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
   */
  participantStatus: ('accepted'|'declined'|'tentative'|'needs-action');
  _participantStatus?: Element | undefined;
  /**
   * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.
   * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
   * This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
   */
  participantType?: CodeableConcept[] | undefined;
  /**
   * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
   */
  start?: string | undefined;
  _start?: Element | undefined;

}