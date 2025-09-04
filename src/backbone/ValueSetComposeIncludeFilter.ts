import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ValueSetComposeIncludeFilter extends BackboneElement implements fhir.ValueSetComposeIncludeFilter {
  /**
   * In case filter.property represents a property of the system, the operation applies to the selected property. In case fil
   */
  @IsOptional()
  @IsIn(['=', 'is-a', 'descendent-of', 'is-not-a', 'regex', 'in', 'not-in', 'generalizes', 'exists'])
  op: ('='|'is-a'|'descendent-of'|'is-not-a'|'regex'|'in'|'not-in'|'generalizes'|'exists');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _op?: Element;

  /**
   * A code that identifies a property or a filter defined in the code system.
   */
  @IsOptional()
  @IsString()
  property?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _property?: Element;

  /**
   * Use regex matching with care - full regex matching on every SNOMED CT term is prohibitive, for example.
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for ValueSetComposeIncludeFilter
   */
  constructor(source: Partial<ValueSetComposeIncludeFilter> = {}) {
    super(source);
  }
}
