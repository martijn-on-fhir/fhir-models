import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class LocationPosition extends BackboneElement {
  /**
   * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes
   */
  @IsOptional()
  @IsNumber()
  altitude?: number;

  /**
   * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes
   */
  @IsOptional()
  @IsNumber()
  latitude?: number;

  /**
   * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see not
   */
  @IsOptional()
  @IsNumber()
  longitude?: number;

  /**
   * Constructor for LocationPosition
   */
  constructor(source: Partial<LocationPosition> = {}) {
    super(source);
  }
}
