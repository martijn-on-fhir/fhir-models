import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Coding } from './Coding';
import { Reference } from './Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiti
 */
export class Signature extends Element implements fhir.Signature {
  /**
   * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Si
   */
  @IsOptional()
  @IsString()
  data?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _data?: Element;

  /**
   * The party that can't sign. For example a child.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  onBehalfOf?: Reference;

  /**
   * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose
   */
  @IsOptional()
  @IsString()
  sigFormat?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sigFormat?: Element;

  /**
   * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherw
   */
  @IsOptional()
  @IsString()
  targetFormat?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _targetFormat?: Element;

  /**
   * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &quot;Commitment Type Indication&quot
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  type: Coding[];

  /**
   * This should agree with the information in the signature.
   */
  @IsOptional()
  @IsString()
  when: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _when?: Element;

  /**
   * This should agree with the information in the signature.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  who: Reference;

  /**
   * Constructor for Signature
   */
  constructor(source: Partial<Signature> = {}) {
    super(source);
  }
}
