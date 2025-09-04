import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Quantity } from './Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Ratio extends Element {
  /**
   * The value of the denominator.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  denominator?: Quantity;

  /**
   * The value of the numerator.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  numerator?: Quantity;

  /**
   * Constructor for Ratio
   */
  constructor(source: Partial<Ratio> = {}) {
    super(source);
  }
}
