import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Endpoint extends DomainResource implements fhir.Endpoint {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Endpoint' as const;

  /**
   * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: ur
   */
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _address?: Element;

  /**
   * For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  connectionType?: Coding;

  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubles
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  contact?: ContactPoint[];

  /**
   * Exactly what these mean depends on the channel type. The can convey additional information to the recipient and/or meet 
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
   * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * This property is not typically used when searching for Endpoint resources for usage. The typical usage is via the refere
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingOrganization?: Reference;

  /**
   * A friendly name that this endpoint can be referred to with.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is approp
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  payloadMimeType?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _payloadMimeType?: Element[];

  /**
   * The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  payloadType?: CodeableConcept[];

  /**
   * The interval during which the endpoint is expected to be operational.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
   */
  @IsOptional()
  @IsIn(['active', 'suspended', 'error', 'off', 'entered-in-error', 'test'])
  status?: ('active'|'suspended'|'error'|'off'|'entered-in-error'|'test');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for Endpoint
   */
  constructor(source: Partial<Endpoint> = {}) {
    super(source);
    this.resourceType = 'Endpoint';
  }
}
