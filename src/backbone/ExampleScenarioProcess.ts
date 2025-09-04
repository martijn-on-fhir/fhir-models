import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ExampleScenarioProcessStep } from './ExampleScenarioProcessStep';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExampleScenarioProcess extends BackboneElement implements fhir.ExampleScenarioProcess {
  /**
   * A longer description of the group of operations.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Description of final status after the process ends.
   */
  @IsOptional()
  @IsString()
  postConditions?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _postConditions?: Element;

  /**
   * Description of initial status before the process starts.
   */
  @IsOptional()
  @IsString()
  preConditions?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _preConditions?: Element;

  /**
   * Each step of the process.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioProcessStep)
  step?: ExampleScenarioProcessStep[];

  /**
   * The diagram title of the group of operations.
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * Constructor for ExampleScenarioProcess
   */
  constructor(source: Partial<ExampleScenarioProcess> = {}) {
    super(source);
  }
}
