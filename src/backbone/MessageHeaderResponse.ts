import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MessageHeaderResponse extends BackboneElement {
  /**
   * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
   */
  @IsOptional()
  @IsIn(['ok', 'transient-error', 'fatal-error'])
  code?: ('ok'|'transient-error'|'fatal-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  details?: Reference;

  /**
   * The MessageHeader.id of the message to which this message is a response.
   */
  @IsOptional()
  @IsString()
  identifier?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _identifier?: Element;

  /**
   * Constructor for MessageHeaderResponse
   */
  constructor(source: Partial<MessageHeaderResponse> = {}) {
    super(source);
  }
}
