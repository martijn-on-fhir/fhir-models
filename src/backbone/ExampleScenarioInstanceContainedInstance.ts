import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExampleScenarioInstanceContainedInstance extends BackboneElement implements fhir.ExampleScenarioInstanceContainedInstance {
  /**
   * Each resource contained in the instance.
   */
  @IsOptional()
  @IsString()
  resourceId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _resourceId?: Element;

  /**
   * A specific version of a resource contained in the instance.
   */
  @IsOptional()
  @IsString()
  versionId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _versionId?: Element;

  /**
   * Constructor for ExampleScenarioInstanceContainedInstance
   */
  constructor(source: Partial<ExampleScenarioInstanceContainedInstance> = {}) {
    super(source);
  }
}
