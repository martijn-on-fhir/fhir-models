import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CommunicationRequestPayload extends BackboneElement {
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  @IsOptional()
  @IsString()
  contentString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _contentString?: Element;

  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  contentAttachment?: Attachment;

  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  contentReference?: Reference;

  /**
   * Constructor for CommunicationRequestPayload
   */
  constructor(source: Partial<CommunicationRequestPayload> = {}) {
    super(source);
  }
}
