import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ExampleScenarioInstanceContainedInstance } from './ExampleScenarioInstanceContainedInstance';
import { ExampleScenarioInstanceVersion } from './ExampleScenarioInstanceVersion';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExampleScenarioInstance extends BackboneElement {
  /**
   * Resources contained in the instance (e.g. the observations contained in a bundle).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioInstanceContainedInstance)
  containedInstance?: ExampleScenarioInstanceContainedInstance[];

  /**
   * Human-friendly description of the resource instance.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * A short name for the resource instance.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The id of the resource for referencing.
   */
  @IsOptional()
  @IsString()
  resourceId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _resourceId?: Element;

  /**
   * The type of the resource.
   */
  @IsOptional()
  @IsString()
  resourceType?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _resourceType?: Element;

  /**
   * A specific version of the resource.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioInstanceVersion)
  version?: ExampleScenarioInstanceVersion[];

  /**
   * Constructor for ExampleScenarioInstance
   */
  constructor(source: Partial<ExampleScenarioInstance> = {}) {
    super(source);
  }
}
