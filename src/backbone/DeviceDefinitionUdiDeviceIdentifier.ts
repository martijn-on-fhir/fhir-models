import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceDefinitionUdiDeviceIdentifier extends BackboneElement implements fhir.DeviceDefinitionUdiDeviceIdentifier {
  /**
   * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and juris
   */
  @IsOptional()
  @IsString()
  deviceIdentifier?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _deviceIdentifier?: Element;

  /**
   * The organization that assigns the identifier algorithm.
   */
  @IsOptional()
  @IsString()
  issuer?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _issuer?: Element;

  /**
   * The jurisdiction to which the deviceIdentifier applies.
   */
  @IsOptional()
  @IsString()
  jurisdiction?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _jurisdiction?: Element;

  /**
   * Constructor for DeviceDefinitionUdiDeviceIdentifier
   */
  constructor(source: Partial<DeviceDefinitionUdiDeviceIdentifier> = {}) {
    super(source);
  }
}
