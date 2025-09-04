import { AppointmentParticipant } from './AppointmentParticipant';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export interface Appointment extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Appointment';
  /**
   * The style of appointment or patient that has been booked in the slot (not service type).
   */
  appointmentType?: CodeableConcept | undefined;
  /**
   * The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
   */
  basedOn?: Reference[] | undefined;
  /**
   * The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply.
   */
  cancelationReason?: CodeableConcept | undefined;
  /**
   * Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"
   * Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * This property is required for many use cases where the age of an appointment is considered in processing workflows for scheduling and billing of appointments.
   */
  created?: string | undefined;
  _created?: Element | undefined;
  /**
   * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Date/Time that the appointment is to conclude.
   */
  end?: string | undefined;
  _end?: Element | undefined;
  /**
   * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: Identifier[] | undefined;
  /**
   * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end.
   */
  minutesDuration?: number | undefined;
  /**
   * List of participants involved in the appointment.
   */
  participant: AppointmentParticipant[];
  /**
   * While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
   */
  patientInstruction?: string | undefined;
  _patientInstruction?: Element | undefined;
  /**
   * Seeking implementer feedback on this property and how interoperable it is.
   * Using an extension to record a CodeableConcept for named values may be tested at a future connectathon.
   */
  priority?: number | undefined;
  /**
   * The coded reason that this appointment is being scheduled. This is more clinical than administrative.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * This does not introduce a capacity for recurring appointments.
   */
  requestedPeriod?: Period[] | undefined;
  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: CodeableConcept[] | undefined;
  /**
   * For a provider to provider appointment the code "FOLLOWUP" may be appropriate, as this is expected to be discussing some patient that was seen in the past.
   */
  serviceType?: CodeableConcept[] | undefined;
  /**
   * The slots from the participants' schedules that will be filled by the appointment.
   */
  slot?: Reference[] | undefined;
  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: CodeableConcept[] | undefined;
  /**
   * Date/Time that the appointment is to take place.
   */
  start?: string | undefined;
  _start?: Element | undefined;
  /**
   * If the Appointment's status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE.
   * This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
   */
  status: ('proposed'|'pending'|'booked'|'arrived'|'fulfilled'|'cancelled'|'noshow'|'entered-in-error'|'checked-in'|'waitlist');
  _status?: Element | undefined;
  /**
   * Additional information to support the appointment provided when making the appointment.
   */
  supportingInformation?: Reference[] | undefined;

}