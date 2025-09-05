import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExampleScenarioInstanceVersion extends BackboneElement {
  /**
   * The description of the resource version.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The identifier of a specific version of a resource.
   */
  @IsOptional()
  @IsString()
  versionId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _versionId?: Element;

  /**
   * Constructor for ExampleScenarioInstanceVersion
   */
  constructor(source: Partial<ExampleScenarioInstanceVersion> = {}) {
    super(source);
  }
}
