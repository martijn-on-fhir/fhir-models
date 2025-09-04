import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceSpecialization extends BackboneElement implements fhir.DeviceSpecialization {
  /**
   * The standard that is used to operate and communicate.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  systemType?: CodeableConcept;

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
   * Constructor for DeviceSpecialization
   */
  constructor(source: Partial<DeviceSpecialization> = {}) {
    super(source);
  }
}
