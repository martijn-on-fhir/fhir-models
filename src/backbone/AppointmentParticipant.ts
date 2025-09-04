import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AppointmentParticipant extends BackboneElement {
  /**
   * A Person, Location/HealthcareService or Device that is participating in the appointment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /**
   * Participation period of the actor.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet
   */
  @IsOptional()
  @IsIn(['required', 'optional', 'information-only'])
  required?: ('required'|'optional'|'information-only');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _required?: Element;

  /**
   * Participation status of the actor.
   */
  @IsOptional()
  @IsIn(['accepted', 'declined', 'tentative', 'needs-action'])
  status?: ('accepted'|'declined'|'tentative'|'needs-action');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The role of the participant can be used to declare what the actor will be doing in the scope of this appointment. If the
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Constructor for AppointmentParticipant
   */
  constructor(source: Partial<AppointmentParticipant> = {}) {
    super(source);
  }
}
