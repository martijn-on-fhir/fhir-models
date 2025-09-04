import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceProperty extends BackboneElement {
  /**
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  valueCode?: CodeableConcept[];

  /**
   * Property value as a quantity.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Quantity)
  valueQuantity?: Quantity[];

  /**
   * Constructor for DeviceProperty
   */
  constructor(source: Partial<DeviceProperty> = {}) {
    super(source);
  }
}
