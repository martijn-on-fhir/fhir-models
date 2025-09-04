import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilitiesCodeSystemVersionFilter extends BackboneElement implements fhir.TerminologyCapabilitiesCodeSystemVersionFilter {
  /**
   * Code of the property supported.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * Operations supported for the property.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  op?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _op?: Element[];

  /**
   * Constructor for TerminologyCapabilitiesCodeSystemVersionFilter
   */
  constructor(source: Partial<TerminologyCapabilitiesCodeSystemVersionFilter> = {}) {
    super(source);
  }
}
