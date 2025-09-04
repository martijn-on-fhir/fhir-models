import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Money extends Element {
  /**
   * ISO 4217 Currency Code.
   */
  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _currency?: Element;

  /**
   * Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  @IsOptional()
  @IsNumber()
  value?: number;

  /**
   * Constructor for Money
   */
  constructor(source: Partial<Money> = {}) {
    super(source);
  }
}
