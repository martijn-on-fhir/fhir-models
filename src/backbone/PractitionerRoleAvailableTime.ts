import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PractitionerRoleAvailableTime extends BackboneElement implements fhir.PractitionerRoleAvailableTime {
  /**
   * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
   */
  @IsOptional()
  @IsBoolean()
  allDay?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _allDay?: Element;

  /**
   * The timezone is expected to be for where this HealthcareService is provided at.
   */
  @IsOptional()
  @IsString()
  availableEndTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _availableEndTime?: Element;

  /**
   * The timezone is expected to be for where this HealthcareService is provided at.
   */
  @IsOptional()
  @IsString()
  availableStartTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _availableStartTime?: Element;

  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  @IsOptional()
  @IsIn(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])
  daysOfWeek?: Array<'mon'|'tue'|'wed'|'thu'|'fri'|'sat'|'sun'>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _daysOfWeek?: Element[];

  /**
   * Constructor for PractitionerRoleAvailableTime
   */
  constructor(source: Partial<PractitionerRoleAvailableTime> = {}) {
    super(source);
  }
}
