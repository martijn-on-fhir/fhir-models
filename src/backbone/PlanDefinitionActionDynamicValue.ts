import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Expression } from '../elements/Expression';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PlanDefinitionActionDynamicValue extends BackboneElement {
  /**
   * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the libra
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  expression?: Expression;

  /**
   * To specify the path to the current action being realized, the %action environment variable is available in this path. Fo
   */
  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _path?: Element;

  /**
   * Constructor for PlanDefinitionActionDynamicValue
   */
  constructor(source: Partial<PlanDefinitionActionDynamicValue> = {}) {
    super(source);
  }
}
