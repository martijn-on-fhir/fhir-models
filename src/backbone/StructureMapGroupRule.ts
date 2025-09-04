import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { StructureMapGroupRuleDependent } from './StructureMapGroupRuleDependent';
import { StructureMapGroupRuleSource } from './StructureMapGroupRuleSource';
import { StructureMapGroupRuleTarget } from './StructureMapGroupRuleTarget';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureMapGroupRule extends BackboneElement implements fhir.StructureMapGroupRule {
  /**
   * Which other rules to apply in the context of this rule.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRuleDependent)
  dependent?: StructureMapGroupRuleDependent[];

  /**
   * Documentation for this instance of data.
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * Name of the rule for internal references.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Rules contained in this rule.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRule)
  rule?: StructureMapGroupRule[];

  /**
   * Source inputs to the mapping.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRuleSource)
  source?: StructureMapGroupRuleSource[];

  /**
   * Content to create because of this mapping rule.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRuleTarget)
  target?: StructureMapGroupRuleTarget[];

  /**
   * Constructor for StructureMapGroupRule
   */
  constructor(source: Partial<StructureMapGroupRule> = {}) {
    super(source);
  }
}
