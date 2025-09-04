import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CodeSystemFilter extends BackboneElement implements fhir.CodeSystemFilter {
  /**
   * The code that identifies this filter when it is used as a filter in [ValueSet](valueset.html#).compose.include.filter.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * A description of how or why the filter is used.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * A list of operators that can be used with the filter.
   */
  @IsOptional()
  @IsIn(['=', 'is-a', 'descendent-of', 'is-not-a', 'regex', 'in', 'not-in', 'generalizes', 'exists'])
  operator: Array<'='|'is-a'|'descendent-of'|'is-not-a'|'regex'|'in'|'not-in'|'generalizes'|'exists'>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _operator?: Element[];

  /**
   * A description of what the value for the filter should be.
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for CodeSystemFilter
   */
  constructor(source: Partial<CodeSystemFilter> = {}) {
    super(source);
  }
}
