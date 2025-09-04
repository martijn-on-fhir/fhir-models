import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class LocationHoursOfOperation extends BackboneElement {
  /**
   * The Location is open all day.
   */
  @IsOptional()
  @IsBoolean()
  allDay?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _allDay?: Element;

  /**
   * Time that the Location closes.
   */
  @IsOptional()
  @IsString()
  closingTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _closingTime?: Element;

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
   * Time that the Location opens.
   */
  @IsOptional()
  @IsString()
  openingTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _openingTime?: Element;

  /**
   * Constructor for LocationHoursOfOperation
   */
  constructor(source: Partial<LocationHoursOfOperation> = {}) {
    super(source);
  }
}
