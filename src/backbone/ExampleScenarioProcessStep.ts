import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ExampleScenarioProcess } from './ExampleScenarioProcess';
import { ExampleScenarioProcessStepAlternative } from './ExampleScenarioProcessStepAlternative';
import { ExampleScenarioProcessStepOperation } from './ExampleScenarioProcessStepOperation';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExampleScenarioProcessStep extends BackboneElement {
  /**
   * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circu
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioProcessStepAlternative)
  alternative?: ExampleScenarioProcessStepAlternative[];

  /**
   * Each interaction or action.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExampleScenarioProcessStepOperation)
  operation?: ExampleScenarioProcessStepOperation;

  /**
   * If there is a pause in the flow.
   */
  @IsOptional()
  @IsBoolean()
  pause?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _pause?: Element;

  /**
   * Nested process.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioProcess)
  process?: ExampleScenarioProcess[];

  /**
   * Constructor for ExampleScenarioProcessStep
   */
  constructor(source: Partial<ExampleScenarioProcessStep> = {}) {
    super(source);
  }
}
