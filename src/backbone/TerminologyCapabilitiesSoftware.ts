import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilitiesSoftware extends BackboneElement implements fhir.TerminologyCapabilitiesSoftware {
  /**
   * Name the software is known by.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * If possible, a version should be specified, as statements are likely to be different for different versions of software.
   */
  @IsOptional()
  @IsString()
  version?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _version?: Element;

  /**
   * Constructor for TerminologyCapabilitiesSoftware
   */
  constructor(source: Partial<TerminologyCapabilitiesSoftware> = {}) {
    super(source);
  }
}
