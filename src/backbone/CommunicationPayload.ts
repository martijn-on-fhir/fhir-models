import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CommunicationPayload extends BackboneElement implements fhir.CommunicationPayload {
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  @IsOptional()
  @IsString()
  contentString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _contentString?: Element;

  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  contentAttachment?: Attachment;

  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  contentReference?: Reference;

  /**
   * Constructor for CommunicationPayload
   */
  constructor(source: Partial<CommunicationPayload> = {}) {
    super(source);
  }
}
