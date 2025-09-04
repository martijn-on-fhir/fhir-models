import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class NamingSystemUniqueId extends BackboneElement implements fhir.NamingSystemUniqueId {
  /**
   * e.g. "must be used in Germany" or "was initially published in error with this value".
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * Within a registry, a given identifier should only be "active" for a single namespace at a time.  (Ideally, an identifier
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Indicates whether this identifier is the "preferred" identifier of this type.
   */
  @IsOptional()
  @IsBoolean()
  preferred?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _preferred?: Element;

  /**
   * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other i
   */
  @IsOptional()
  @IsIn(['oid', 'uuid', 'uri', 'other'])
  type?: ('oid'|'uuid'|'uri'|'other');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * If the value is a URI intended for use as FHIR system identifier, the URI should not contain "\" or "?" or "," since thi
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for NamingSystemUniqueId
   */
  constructor(source: Partial<NamingSystemUniqueId> = {}) {
    super(source);
  }
}
