import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CatalogEntryRelatedEntry extends BackboneElement {
  /**
   * The reference to the related item.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  item?: Reference;

  /**
   * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
   */
  @IsOptional()
  @IsIn(['triggers', 'is-replaced-by'])
  relationtype?: ('triggers'|'is-replaced-by');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _relationtype?: Element;

  /**
   * Constructor for CatalogEntryRelatedEntry
   */
  constructor(source: Partial<CatalogEntryRelatedEntry> = {}) {
    super(source);
  }
}
