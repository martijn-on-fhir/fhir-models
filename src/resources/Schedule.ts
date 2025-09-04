import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Schedule extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Schedule' as const;

  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselv
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  actor?: Reference[];

  /**
   * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be a
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * External Ids for this item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amo
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  planningHorizon?: Period;

  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  serviceCategory?: CodeableConcept[];

  /**
   * The specific service that is to be performed during this appointment.
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
   * Constructor for Schedule
   */
  constructor(source: Partial<Schedule> = {}) {
    super(source);
    this.resourceType = 'Schedule';
  }
}
