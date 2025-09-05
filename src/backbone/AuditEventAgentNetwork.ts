import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AuditEventAgentNetwork extends BackboneElement {
  /**
   * This could be a device id, IP address or some other identifier associated with a device.
   */
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _address?: Element;

  /**
   * An identifier for the type of network access point that originated the audit event.
   */
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for AuditEventAgentNetwork
   */
  constructor(source: Partial<AuditEventAgentNetwork> = {}) {
    super(source);
  }
}
