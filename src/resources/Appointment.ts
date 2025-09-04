import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { AppointmentParticipant } from '../backbone/AppointmentParticipant';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Appointment extends DomainResource implements fhir.Appointment {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Appointment' as const;

  /**
   * The style of appointment or patient that has been booked in the slot (not service type).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  appointmentType?: CodeableConcept;

  /**
   * The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to deter
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  cancelationReason?: CodeableConcept;

  /**
   * Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immedi
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * This property is required for many use cases where the age of an appointment is considered in processing workflows for s
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. 
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Date/Time that the appointment is to conclude.
   */
  @IsOptional()
  @IsString()
  end?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _end?: Element;

  /**
   * This records identifiers associated with this appointment concern that are defined by business processes and/or used to 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  
   */
  @IsOptional()
  @IsNumber()
  minutesDuration?: number;

  /**
   * List of participants involved in the appointment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AppointmentParticipant)
  participant?: AppointmentParticipant[];

  /**
   * While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture pati
   */
  @IsOptional()
  @IsString()
  patientInstruction?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _patientInstruction?: Element;

  /**
   * Seeking implementer feedback on this property and how interoperable it is. Using an extension to record a CodeableConcep
   */
  @IsOptional()
  @IsNumber()
  priority?: number;

  /**
   * The coded reason that this appointment is being scheduled. This is more clinical than administrative.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * This does not introduce a capacity for recurring appointments.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Period)
  requestedPeriod?: Period[];

  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  serviceCategory?: CodeableConcept[];

  /**
   * For a provider to provider appointment the code "FOLLOWUP" may be appropriate, as this is expected to be discussing some
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  serviceType?: CodeableConcept[];

  /**
   * The slots from the participants' schedules that will be filled by the appointment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  slot?: Reference[];

  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialty?: CodeableConcept[];

  /**
   * Date/Time that the appointment is to take place.
   */
  @IsOptional()
  @IsString()
  start?: string;

  /**
   * Constructor for Appointment
   */
  constructor(source: Partial<Appointment> = {}) {
    super(source);
    this.resourceType = 'Appointment';
  }
}
