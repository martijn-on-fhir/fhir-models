import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceDefinitionMaterial extends BackboneElement {
  /**
   * Whether the substance is a known or suspected allergen.
   */
  @IsOptional()
  @IsBoolean()
  allergenicIndicator?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _allergenicIndicator?: Element;

  /**
   * Indicates an alternative material of the device.
   */
  @IsOptional()
  @IsBoolean()
  alternate?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _alternate?: Element;

  /**
   * The substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substance?: CodeableConcept;

  /**
   * Constructor for DeviceDefinitionMaterial
   */
  constructor(source: Partial<DeviceDefinitionMaterial> = {}) {
    super(source);
  }
}
