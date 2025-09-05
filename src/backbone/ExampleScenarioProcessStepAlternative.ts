import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { ExampleScenarioProcessStep } from './ExampleScenarioProcessStep';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExampleScenarioProcessStepAlternative extends BackboneElement {
  /**
   * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * What happens in each alternative option.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioProcessStep)
  step?: ExampleScenarioProcessStep[];

  /**
   * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invok
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * Constructor for ExampleScenarioProcessStepAlternative
   */
  constructor(source: Partial<ExampleScenarioProcessStepAlternative> = {}) {
    super(source);
  }
}
