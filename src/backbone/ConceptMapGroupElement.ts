import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ConceptMapGroupElementTarget } from './ConceptMapGroupElementTarget';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConceptMapGroupElement extends BackboneElement {
  /**
   * Identity (code or path) or the element/item being mapped.
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
   * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrowe
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptMapGroupElementTarget)
  target?: ConceptMapGroupElementTarget[];

  /**
   * Constructor for ConceptMapGroupElement
   */
  constructor(source: Partial<ConceptMapGroupElement> = {}) {
    super(source);
  }
}
