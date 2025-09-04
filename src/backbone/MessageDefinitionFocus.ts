import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MessageDefinitionFocus extends BackboneElement implements fhir.MessageDefinitionFocus {
  /**
   * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a partic
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid
   */
  @IsOptional()
  @IsString()
  max?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _max?: Element;

  /**
   * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid
   */
  @IsOptional()
  @IsNumber()
  min?: number;

  /**
   * This should be present for most message definitions.  However, if the message focus is only a single resource and there 
   */
  @IsOptional()
  @IsString()
  profile?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _profile?: Element;

  /**
   * Constructor for MessageDefinitionFocus
   */
  constructor(source: Partial<MessageDefinitionFocus> = {}) {
    super(source);
  }
}
