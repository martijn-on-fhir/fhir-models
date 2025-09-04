import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Resource } from '../base/Resource';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Binary extends Resource implements fhir.Binary {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Binary' as const;

  /**
   * MimeType of the binary content represented as a standard MimeType (BCP 13).
   */
  @IsOptional()
  @IsString()
  contentType?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _contentType?: Element;

  /**
   * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing 
   */
  @IsOptional()
  @IsString()
  data?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _data?: Element;

  /**
   * Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriat
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  securityContext?: Reference;

  /**
   * Constructor for Binary
   */
  constructor(source: Partial<Binary> = {}) {
    super(source);
    this.resourceType = 'Binary';
  }
}
