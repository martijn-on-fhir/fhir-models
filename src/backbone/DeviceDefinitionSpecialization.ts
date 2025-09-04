import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceDefinitionSpecialization extends BackboneElement implements fhir.DeviceDefinitionSpecialization {
  /**
   * The standard that is used to operate and communicate.
   */
  @IsOptional()
  @IsString()
  systemType?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _systemType?: Element;

  /**
   * The version of the standard that is used to operate and communicate.
   */
  @IsOptional()
  @IsString()
  version?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _version?: Element;

  /**
   * Constructor for DeviceDefinitionSpecialization
   */
  constructor(source: Partial<DeviceDefinitionSpecialization> = {}) {
    super(source);
  }
}
