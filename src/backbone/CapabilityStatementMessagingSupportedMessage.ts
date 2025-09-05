import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementMessagingSupportedMessage extends BackboneElement {
  /**
   * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
   */
  @IsOptional()
  @IsString()
  definition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definition?: Element;

  /**
   * The mode of this event declaration - whether application is sender or receiver.
   */
  @IsOptional()
  @IsIn(['sender', 'receiver'])
  mode?: ('sender'|'receiver');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mode?: Element;

  /**
   * Constructor for CapabilityStatementMessagingSupportedMessage
   */
  constructor(source: Partial<CapabilityStatementMessagingSupportedMessage> = {}) {
    super(source);
  }
}
