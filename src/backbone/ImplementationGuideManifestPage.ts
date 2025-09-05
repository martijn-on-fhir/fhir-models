import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuideManifestPage extends BackboneElement {
  /**
   * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  anchor?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _anchor?: Element[];

  /**
   * Appending 'rendering' + "/" + this should resolve to the page.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Label for the page intended for human display.
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * Constructor for ImplementationGuideManifestPage
   */
  constructor(source: Partial<ImplementationGuideManifestPage> = {}) {
    super(source);
  }
}
