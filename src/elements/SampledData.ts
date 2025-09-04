import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Quantity } from './Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiti
 */
export class SampledData extends Element {
  /**
   * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
   */
  @IsOptional()
  @IsString()
  data?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _data?: Element;

  /**
   * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
   */
  @IsOptional()
  @IsNumber()
  dimensions: number;

  /**
   * A correction factor that is applied to the sampled data points before they are added to the origin.
   */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /**
   * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
   */
  @IsOptional()
  @IsNumber()
  lowerLimit?: number;

  /**
   * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  origin: Quantity;

  /**
   * This is usually a whole number.
   */
  @IsOptional()
  @IsNumber()
  period: number;

  /**
   * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
   */
  @IsOptional()
  @IsNumber()
  upperLimit?: number;

  /**
   * Constructor for SampledData
   */
  constructor(source: Partial<SampledData> = {}) {
    super(source);
  }
}
