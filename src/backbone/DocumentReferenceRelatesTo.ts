import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DocumentReferenceRelatesTo extends BackboneElement {
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
   * The target document of this relationship.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  target?: Reference;

  /**
   * Constructor for DocumentReferenceRelatesTo
   */
  constructor(source: Partial<DocumentReferenceRelatesTo> = {}) {
    super(source);
  }
}
