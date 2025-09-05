import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuideDefinitionTemplate extends BackboneElement {
  /**
   * Type of template specified.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * The scope in which the template applies.
   */
  @IsOptional()
  @IsString()
  scope?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _scope?: Element;

  /**
   * The source location for the template.
   */
  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _source?: Element;

  /**
   * Constructor for ImplementationGuideDefinitionTemplate
   */
  constructor(source: Partial<ImplementationGuideDefinitionTemplate> = {}) {
    super(source);
  }
}
