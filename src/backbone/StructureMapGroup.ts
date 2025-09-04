import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { StructureMapGroupInput } from './StructureMapGroupInput';
import { StructureMapGroupRule } from './StructureMapGroupRule';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureMapGroup extends BackboneElement {
  /**
   * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * Another group that this group adds rules to.
   */
  @IsOptional()
  @IsString()
  extends?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _extends?: Element;

  /**
   * If no inputs are named, then the entry mappings are type based.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupInput)
  input?: StructureMapGroupInput[];

  /**
   * A unique name for the group for the convenience of human readers.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Transform Rule from source to target.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRule)
  rule?: StructureMapGroupRule[];

  /**
   * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combina
   */
  @IsOptional()
  @IsIn(['none', 'types', 'type-and-types'])
  typeMode?: ('none'|'types'|'type-and-types');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _typeMode?: Element;

  /**
   * Constructor for StructureMapGroup
   */
  constructor(source: Partial<StructureMapGroup> = {}) {
    super(source);
  }
}
