import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementMessagingEndpoint extends BackboneElement {
  /**
   * The network address of the endpoint. For solutions that do not use network addresses for routing, it can be just an iden
   */
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _address?: Element;

  /**
   * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  protocol?: Coding;

  /**
   * Constructor for CapabilityStatementMessagingEndpoint
   */
  constructor(source: Partial<CapabilityStatementMessagingEndpoint> = {}) {
    super(source);
  }
}
