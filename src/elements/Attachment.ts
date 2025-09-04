import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Attachment extends Element implements fhir.Attachment {
  /**
   * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
   */
  @IsOptional()
  @IsString()
  contentType?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _contentType?: Element;

  /**
   * The date that the attachment was first created.
   */
  @IsOptional()
  @IsString()
  creation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _creation?: Element;

  /**
   * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
   */
  @IsOptional()
  @IsString()
  data?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _data?: Element;

  /**
   * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digita
   */
  @IsOptional()
  @IsString()
  hash?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _hash?: Element;

  /**
   * The human language of the content. The value can be any valid value according to BCP 47.
   */
  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _language?: Element;

  /**
   * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
   */
  @IsOptional()
  @IsNumber()
  size?: number;

  /**
   * A label or set of text to display in place of the data.
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using 
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * Constructor for Attachment
   */
  constructor(source: Partial<Attachment> = {}) {
    super(source);
  }
}
