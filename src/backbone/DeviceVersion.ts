import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceVersion extends BackboneElement implements fhir.DeviceVersion {
  /**
   * A single component of the device version.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  component?: Identifier;

  /**
   * The type of the device version.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * The version text.
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for DeviceVersion
   */
  constructor(source: Partial<DeviceVersion> = {}) {
    super(source);
  }
}
