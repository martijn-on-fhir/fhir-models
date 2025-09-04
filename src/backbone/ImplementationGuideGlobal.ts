import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuideGlobal extends BackboneElement implements fhir.ImplementationGuideGlobal {
  /**
   * A reference to the profile that all instances must conform to.
   */
  @IsOptional()
  @IsString()
  profile?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _profile?: Element;

  /**
   * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a sys
   */
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for ImplementationGuideGlobal
   */
  constructor(source: Partial<ImplementationGuideGlobal> = {}) {
    super(source);
  }
}
