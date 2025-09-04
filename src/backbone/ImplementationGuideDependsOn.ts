import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuideDependsOn extends BackboneElement implements fhir.ImplementationGuideDependsOn {
  /**
   * The NPM package name for the Implementation Guide that this IG depends on.
   */
  @IsOptional()
  @IsString()
  packageId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _packageId?: Element;

  /**
   * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementatio
   */
  @IsOptional()
  @IsString()
  uri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _uri?: Element;

  /**
   * This follows the syntax of the NPM packaging version field - see [[reference]].
   */
  @IsOptional()
  @IsString()
  version?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _version?: Element;

  /**
   * Constructor for ImplementationGuideDependsOn
   */
  constructor(source: Partial<ImplementationGuideDependsOn> = {}) {
    super(source);
  }
}
