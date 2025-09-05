import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubscriptionChannel extends BackboneElement {
  /**
   * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: ur
   */
  @IsOptional()
  @IsString()
  endpoint?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _endpoint?: Element;

  /**
   * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet 
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  header?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _header?: Element[];

  /**
   * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is approp
   */
  @IsOptional()
  @IsString()
  payload?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _payload?: Element;

  /**
   * The type of channel to send notifications on.
   */
  @IsOptional()
  @IsIn(['rest-hook', 'websocket', 'email', 'sms', 'message'])
  type?: ('rest-hook'|'websocket'|'email'|'sms'|'message');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for SubscriptionChannel
   */
  constructor(source: Partial<SubscriptionChannel> = {}) {
    super(source);
  }
}
