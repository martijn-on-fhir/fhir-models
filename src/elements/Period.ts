import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Period extends Element {
  /**
   * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.
   */
  @IsOptional()
  @IsString()
  end?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _end?: Element;

  /**
   * If the low element is missing, the meaning is that the low boundary is not known.
   */
  @IsOptional()
  @IsString()
  start?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _start?: Element;

  /**
   * Constructor for Period
   */
  constructor(source: Partial<Period> = {}) {
    super(source);
  }
}
