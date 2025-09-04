import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CompositionRelatesTo extends BackboneElement {
  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the refer
   */
  @IsOptional()
  @IsIn(['replaces', 'transforms', 'signs', 'appends'])
  code?: ('replaces'|'transforms'|'signs'|'appends');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * The target composition/document of this relationship.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  targetIdentifier?: Identifier;

  /**
   * The target composition/document of this relationship.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  targetReference?: Reference;

  /**
   * Constructor for CompositionRelatesTo
   */
  constructor(source: Partial<CompositionRelatesTo> = {}) {
    super(source);
  }
}
