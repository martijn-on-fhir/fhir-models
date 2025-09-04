import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImplementationGuideManifestResource extends BackboneElement {
  /**
   * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their norma
   */
  @IsOptional()
  @IsBoolean()
  exampleBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _exampleBoolean?: Element;

  /**
   * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their norma
   */
  @IsOptional()
  @IsString()
  exampleCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _exampleCanonical?: Element;

  /**
   * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementa
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /**
   * Appending 'rendering' + "/" + this should resolve to the resource page.
   */
  @IsOptional()
  @IsString()
  relativePath?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _relativePath?: Element;

  /**
   * Constructor for ImplementationGuideManifestResource
   */
  constructor(source: Partial<ImplementationGuideManifestResource> = {}) {
    super(source);
  }
}
