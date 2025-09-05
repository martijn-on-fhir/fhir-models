import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementSoftware extends BackboneElement {
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
   * Date this version of the software was released.
   */
  @IsOptional()
  @IsString()
  releaseDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _releaseDate?: Element;

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
   * Constructor for CapabilityStatementSoftware
   */
  constructor(source: Partial<CapabilityStatementSoftware> = {}) {
    super(source);
  }
}
