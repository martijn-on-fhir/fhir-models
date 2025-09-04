import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilitiesExpansionParameter extends BackboneElement implements fhir.TerminologyCapabilitiesExpansionParameter {
  /**
   * Description of support for parameter.
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * Expansion Parameter name.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Constructor for TerminologyCapabilitiesExpansionParameter
   */
  constructor(source: Partial<TerminologyCapabilitiesExpansionParameter> = {}) {
    super(source);
  }
}
