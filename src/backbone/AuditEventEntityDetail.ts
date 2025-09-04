import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AuditEventEntityDetail extends BackboneElement implements fhir.AuditEventEntityDetail {
  /**
   * The type of extra detail provided in the value.
   */
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined co
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined co
   */
  @IsOptional()
  @IsString()
  valueBase64Binary?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBase64Binary?: Element;

  /**
   * Constructor for AuditEventEntityDetail
   */
  constructor(source: Partial<AuditEventEntityDetail> = {}) {
    super(source);
  }
}
