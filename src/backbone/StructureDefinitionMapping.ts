import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureDefinitionMapping extends BackboneElement {
  /**
   * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * The specification is described once, with general comments, and then specific mappings are made that reference this decl
   */
  @IsOptional()
  @IsString()
  identity?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _identity?: Element;

  /**
   * A name for the specification that is being mapped to.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * A formal identity for the specification being mapped to helps with identifying maps consistently.
   */
  @IsOptional()
  @IsString()
  uri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _uri?: Element;

  /**
   * Constructor for StructureDefinitionMapping
   */
  constructor(source: Partial<StructureDefinitionMapping> = {}) {
    super(source);
  }
}
