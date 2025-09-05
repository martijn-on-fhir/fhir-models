import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConceptMapGroupUnmapped extends BackboneElement {
  /**
   * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * The display is ignored when processing the map.
   */
  @IsOptional()
  @IsString()
  display?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _display?: Element;

  /**
   * Defines which action to take if there is no match for the source concept in the target system designated for the group. 
   */
  @IsOptional()
  @IsIn(['provided', 'fixed', 'other-map'])
  mode?: ('provided'|'fixed'|'other-map');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mode?: Element;

  /**
   * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource con
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * Constructor for ConceptMapGroupUnmapped
   */
  constructor(source: Partial<ConceptMapGroupUnmapped> = {}) {
    super(source);
  }
}
