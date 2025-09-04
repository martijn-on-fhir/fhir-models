import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Expression } from '../elements/Expression';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PlanDefinitionActionCondition extends BackboneElement {
  /**
   * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the libra
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  expression?: Expression;

  /**
   * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given contex
   */
  @IsOptional()
  @IsIn(['applicability', 'start', 'stop'])
  kind?: ('applicability'|'start'|'stop');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _kind?: Element;

  /**
   * Constructor for PlanDefinitionActionCondition
   */
  constructor(source: Partial<PlanDefinitionActionCondition> = {}) {
    super(source);
  }
}
