import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureMapGroupRuleTargetParameter extends BackboneElement {
  /**
   * Parameter value - variable or literal.
   */
  @IsOptional()
  @IsString()
  valueId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueId?: Element;

  /**
   * Parameter value - variable or literal.
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * Parameter value - variable or literal.
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * Parameter value - variable or literal.
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * Parameter value - variable or literal.
   */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /**
   * Constructor for StructureMapGroupRuleTargetParameter
   */
  constructor(source: Partial<StructureMapGroupRuleTargetParameter> = {}) {
    super(source);
  }
}
