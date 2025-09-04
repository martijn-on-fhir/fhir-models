import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureMapStructure extends BackboneElement {
  /**
   * This is needed if both types have the same name (e.g. version conversion).
   */
  @IsOptional()
  @IsString()
  alias?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _alias?: Element;

  /**
   * Documentation that describes how the structure is used in the mapping.
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * How the referenced structure is used in this mapping.
   */
  @IsOptional()
  @IsIn(['source', 'queried', 'target', 'produced'])
  mode?: ('source'|'queried'|'target'|'produced');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mode?: Element;

  /**
   * The canonical reference to the structure.
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * Constructor for StructureMapStructure
   */
  constructor(source: Partial<StructureMapStructure> = {}) {
    super(source);
  }
}
