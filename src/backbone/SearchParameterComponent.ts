import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SearchParameterComponent extends BackboneElement {
  /**
   * The definition of the search parameter that describes this part.
   */
  @IsOptional()
  @IsString()
  definition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definition?: Element;

  /**
   * This expression overrides the expression in the definition and extracts the index values from the outcome of the composi
   */
  @IsOptional()
  @IsString()
  expression?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expression?: Element;

  /**
   * Constructor for SearchParameterComponent
   */
  constructor(source: Partial<SearchParameterComponent> = {}) {
    super(source);
  }
}
