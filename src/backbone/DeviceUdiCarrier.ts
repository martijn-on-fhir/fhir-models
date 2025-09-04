import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceUdiCarrier extends BackboneElement {
  /**
   * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to mini
   */
  @IsOptional()
  @IsString()
  carrierAIDC?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _carrierAIDC?: Element;

  /**
   * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expr
   */
  @IsOptional()
  @IsString()
  carrierHRF?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _carrierHRF?: Element;

  /**
   * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version o
   */
  @IsOptional()
  @IsString()
  deviceIdentifier?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _deviceIdentifier?: Element;

  /**
   * A coded entry to indicate how the data was entered.
   */
  @IsOptional()
  @IsIn(['barcode', 'rfid', 'manual', 'card', 'self-reported', 'unknown'])
  entryType?: ('barcode'|'rfid'|'manual'|'card'|'self-reported'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _entryType?: Element;

  /**
   * Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include : 1) GS1: http://hl
   */
  @IsOptional()
  @IsString()
  issuer?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _issuer?: Element;

  /**
   * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within
   */
  @IsOptional()
  @IsString()
  jurisdiction?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _jurisdiction?: Element;

  /**
   * Constructor for DeviceUdiCarrier
   */
  constructor(source: Partial<DeviceUdiCarrier> = {}) {
    super(source);
  }
}
