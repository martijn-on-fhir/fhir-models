import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class BiologicallyDerivedProductStorage extends BackboneElement {
  /**
   * Description of storage.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Storage timeperiod.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  duration?: Period;

  /**
   * Temperature scale used.
   */
  @IsOptional()
  @IsIn(['farenheit', 'celsius', 'kelvin'])
  scale?: ('farenheit'|'celsius'|'kelvin');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _scale?: Element;

  /**
   * Storage temperature.
   */
  @IsOptional()
  @IsNumber()
  temperature?: number;

  /**
   * Constructor for BiologicallyDerivedProductStorage
   */
  constructor(source: Partial<BiologicallyDerivedProductStorage> = {}) {
    super(source);
  }
}
