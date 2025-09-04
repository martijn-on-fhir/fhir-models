import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AppointmentResponse extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'AppointmentResponse' as const;

  /**
   * A Person, Location, HealthcareService, or Device that is participating in the appointment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /**
   * Appointment that this response is replying to.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  appointment?: Reference;

  /**
   * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new t
   */
  @IsOptional()
  @IsString()
  end?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _end?: Element;

  /**
   * This records identifiers associated with this appointment response concern that are defined by business processes and/ o
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant a
   */
  @IsOptional()
  @IsIn(['accepted', 'declined', 'tentative', 'needs-action'])
  participantStatus?: ('accepted'|'declined'|'tentative'|'needs-action');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _participantStatus?: Element;

  /**
   * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointme
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  participantType?: CodeableConcept[];

  /**
   * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new t
   */
  @IsOptional()
  @IsString()
  start?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _start?: Element;

  /**
   * Constructor for AppointmentResponse
   */
  constructor(source: Partial<AppointmentResponse> = {}) {
    super(source);
    this.resourceType = 'AppointmentResponse';
  }
}
