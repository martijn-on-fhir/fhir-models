import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Expression } from '../elements/Expression';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ActivityDefinitionDynamicValue extends BackboneElement {
  /**
   * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the libr
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  expression?: Expression;

  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calcula
   */
  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _path?: Element;

  /**
   * Constructor for ActivityDefinitionDynamicValue
   */
  constructor(source: Partial<ActivityDefinitionDynamicValue> = {}) {
    super(source);
  }
}
