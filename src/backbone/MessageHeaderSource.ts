import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ContactPoint } from '../elements/ContactPoint';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MessageHeaderSource extends BackboneElement implements fhir.MessageHeaderSource {
  /**
   * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ContactPoint)
  contact?: ContactPoint;

  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  @IsOptional()
  @IsString()
  endpoint?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _endpoint?: Element;

  /**
   * Human-readable name for the source system.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * May include configuration or other information useful in debugging.
   */
  @IsOptional()
  @IsString()
  software?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _software?: Element;

  /**
   * Can convey versions of multiple systems in situations where a message passes through multiple hands.
   */
  @IsOptional()
  @IsString()
  version?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _version?: Element;

  /**
   * Constructor for MessageHeaderSource
   */
  constructor(source: Partial<MessageHeaderSource> = {}) {
    super(source);
  }
}
