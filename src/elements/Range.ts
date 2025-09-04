import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Quantity } from './Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Range extends Element {
  /**
   * If the high element is missing, the high boundary is not known.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  high?: Quantity;

  /**
   * If the low element is missing, the low boundary is not known.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  low?: Quantity;

  /**
   * Constructor for Range
   */
  constructor(source: Partial<Range> = {}) {
    super(source);
  }
}
