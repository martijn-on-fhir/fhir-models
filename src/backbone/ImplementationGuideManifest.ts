import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ImplementationGuideManifestPage } from './ImplementationGuideManifestPage';
import { ImplementationGuideManifestResource } from './ImplementationGuideManifestResource';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuideManifest extends BackboneElement {
  /**
   * Indicates a relative path to an image that exists within the IG.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  image?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _image?: Element[];

  /**
   * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  other?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _other?: Element[];

  /**
   * Information about a page within the IG.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideManifestPage)
  page?: ImplementationGuideManifestPage[];

  /**
   * A pointer to official web page, PDF or other rendering of the implementation guide.
   */
  @IsOptional()
  @IsString()
  rendering?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _rendering?: Element;

  /**
   * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImplementationGuideManifestResource)
  resource?: ImplementationGuideManifestResource[];

  /**
   * Constructor for ImplementationGuideManifest
   */
  constructor(source: Partial<ImplementationGuideManifest> = {}) {
    super(source);
  }
}
