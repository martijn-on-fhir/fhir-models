import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CapabilityStatementMessagingEndpoint } from './CapabilityStatementMessagingEndpoint';
import { CapabilityStatementMessagingSupportedMessage } from './CapabilityStatementMessagingSupportedMessage';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementMessaging extends BackboneElement {
  /**
   * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability sta
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * An endpoint (network accessible address) to which messages and/or replies are to be sent.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementMessagingEndpoint)
  endpoint?: CapabilityStatementMessagingEndpoint[];

  /**
   * If this value is missing then the application does not implement (receiver) or depend on (sender) reliable messaging.
   */
  @IsOptional()
  @IsNumber()
  reliableCache?: number;

  /**
   * This is a proposed alternative to the messaging.event structure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementMessagingSupportedMessage)
  supportedMessage?: CapabilityStatementMessagingSupportedMessage[];

  /**
   * Constructor for CapabilityStatementMessaging
   */
  constructor(source: Partial<CapabilityStatementMessaging> = {}) {
    super(source);
  }
}
