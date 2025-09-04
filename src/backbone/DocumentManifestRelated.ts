import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DocumentManifestRelated extends BackboneElement {
  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  ref?: Reference;

  /**
   * Constructor for DocumentManifestRelated
   */
  constructor(source: Partial<DocumentManifestRelated> = {}) {
    super(source);
  }
}
