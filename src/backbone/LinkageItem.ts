import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class LinkageItem extends BackboneElement implements fhir.LinkageItem {
  /**
   * The resource instance being linked as part of the group.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  resource?: Reference;

  /**
   * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representa
   */
  @IsOptional()
  @IsIn(['source', 'alternate', 'historical'])
  type?: ('source'|'alternate'|'historical');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for LinkageItem
   */
  constructor(source: Partial<LinkageItem> = {}) {
    super(source);
  }
}
