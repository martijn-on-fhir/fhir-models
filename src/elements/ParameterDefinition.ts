import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiti
 */
export class ParameterDefinition extends Element {
  /**
   * A brief discussion of what the parameter is for and how it is used by the module.
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  @IsOptional()
  @IsString()
  max?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _max?: Element;

  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  @IsOptional()
  @IsNumber()
  min?: number;

  /**
   * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
   */
  @IsOptional()
  @IsString()
  profile?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _profile?: Element;

  /**
   * The type of the parameter.
   */
  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Whether the parameter is input or output for the module.
   */
  @IsOptional()
  @IsIn(['in', 'out'])
  use: ('in'|'out');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _use?: Element;

  /**
   * Constructor for ParameterDefinition
   */
  constructor(source: Partial<ParameterDefinition> = {}) {
    super(source);
  }
}
