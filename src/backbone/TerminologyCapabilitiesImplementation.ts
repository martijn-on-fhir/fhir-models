import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilitiesImplementation extends BackboneElement implements fhir.TerminologyCapabilitiesImplementation {
  /**
   * Information about the specific installation that this terminology capability statement relates to.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * An absolute base URL for the implementation.
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * Constructor for TerminologyCapabilitiesImplementation
   */
  constructor(source: Partial<TerminologyCapabilitiesImplementation> = {}) {
    super(source);
  }
}
