import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceDefinitionDeviceName extends BackboneElement implements fhir.DeviceDefinitionDeviceName {
  /**
   * The name of the device.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The type of deviceName. UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   */
  @IsOptional()
  @IsIn(['udi-label-name', 'user-friendly-name', 'patient-reported-name', 'manufacturer-name', 'model-name', 'other'])
  type?: ('udi-label-name'|'user-friendly-name'|'patient-reported-name'|'manufacturer-name'|'model-name'|'other');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for DeviceDefinitionDeviceName
   */
  constructor(source: Partial<DeviceDefinitionDeviceName> = {}) {
    super(source);
  }
}
