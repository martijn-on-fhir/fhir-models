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
export class Slot extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Slot' as const;

  /**
   * The style of appointment or patient that may be booked in the slot (not service type).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  appointmentType?: CodeableConcept;

  /**
   * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * Date/Time that the slot is to conclude.
   */
  @IsOptional()
  @IsString()
  end?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _end?: Element;

  /**
   * External Ids for this item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
   */
  @IsOptional()
  @IsBoolean()
  overbooked?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _overbooked?: Element;

  /**
   * The schedule resource that this slot defines an interval of status information.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  schedule?: Reference;

  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  serviceCategory?: CodeableConcept[];

  /**
   * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  serviceType?: CodeableConcept[];

  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialty?: CodeableConcept[];

  /**
   * Date/Time that the slot is to begin.
   */
  @IsOptional()
  @IsString()
  start?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _start?: Element;

  /**
   * busy | free | busy-unavailable | busy-tentative | entered-in-error.
   */
  @IsOptional()
  @IsIn(['busy', 'free', 'busy-unavailable', 'busy-tentative', 'entered-in-error'])
  status?: ('busy'|'free'|'busy-unavailable'|'busy-tentative'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for Slot
   */
  constructor(source: Partial<Slot> = {}) {
    super(source);
    this.resourceType = 'Slot';
  }
}
