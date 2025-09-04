import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MessageDefinitionAllowedResponse extends BackboneElement implements fhir.MessageDefinitionAllowedResponse {
  /**
   * A reference to the message definition that must be adhered to by this supported response.
   */
  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _message?: Element;

  /**
   * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative 
   */
  @IsOptional()
  @IsString()
  situation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _situation?: Element;

  /**
   * Constructor for MessageDefinitionAllowedResponse
   */
  constructor(source: Partial<MessageDefinitionAllowedResponse> = {}) {
    super(source);
  }
}
