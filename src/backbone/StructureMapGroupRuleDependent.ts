import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureMapGroupRuleDependent extends BackboneElement {
  /**
   * Name of a rule or group to apply.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Variable to pass to the rule or group.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  variable?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _variable?: Element[];

  /**
   * Constructor for StructureMapGroupRuleDependent
   */
  constructor(source: Partial<StructureMapGroupRuleDependent> = {}) {
    super(source);
  }
}
