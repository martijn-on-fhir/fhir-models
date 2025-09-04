import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export interface Slot extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Slot';
  /**
   * The style of appointment or patient that may be booked in the slot (not service type).
   */
  appointmentType?: CodeableConcept | undefined;
  /**
   * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * Date/Time that the slot is to conclude.
   */
  end: string;
  _end?: Element | undefined;
  /**
   * External Ids for this item.
   */
  identifier?: Identifier[] | undefined;
  /**
   * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
   */
  overbooked?: boolean | undefined;
  _overbooked?: Element | undefined;
  /**
   * The schedule resource that this slot defines an interval of status information.
   */
  schedule: Reference;
  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: CodeableConcept[] | undefined;
  /**
   * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
   */
  serviceType?: CodeableConcept[] | undefined;
  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: CodeableConcept[] | undefined;
  /**
   * Date/Time that the slot is to begin.
   */
  start: string;
  _start?: Element | undefined;
  /**
   * busy | free | busy-unavailable | busy-tentative | entered-in-error.
   */
  status: ('busy'|'free'|'busy-unavailable'|'busy-tentative'|'entered-in-error');
  _status?: Element | undefined;

}