import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceMetricCalibration extends BackboneElement {
  /**
   * Describes the state of the calibration.
   */
  @IsOptional()
  @IsIn(['not-calibrated', 'calibration-required', 'calibrated', 'unspecified'])
  state?: ('not-calibrated'|'calibration-required'|'calibrated'|'unspecified');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _state?: Element;

  /**
   * Describes the time last calibration has been performed.
   */
  @IsOptional()
  @IsString()
  time?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _time?: Element;

  /**
   * Describes the type of the calibration method.
   */
  @IsOptional()
  @IsIn(['unspecified', 'offset', 'gain', 'two-point'])
  type?: ('unspecified'|'offset'|'gain'|'two-point');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for DeviceMetricCalibration
   */
  constructor(source: Partial<DeviceMetricCalibration> = {}) {
    super(source);
  }
}
