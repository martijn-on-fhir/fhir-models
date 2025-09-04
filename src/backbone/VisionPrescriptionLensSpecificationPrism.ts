import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class VisionPrescriptionLensSpecificationPrism extends BackboneElement implements fhir.VisionPrescriptionLensSpecificationPrism {
  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  @IsOptional()
  @IsNumber()
  amount?: number;

  /**
   * The relative base, or reference lens edge, for the prism.
   */
  @IsOptional()
  @IsIn(['up', 'down', 'in', 'out'])
  base?: ('up'|'down'|'in'|'out');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _base?: Element;

  /**
   * Constructor for VisionPrescriptionLensSpecificationPrism
   */
  constructor(source: Partial<VisionPrescriptionLensSpecificationPrism> = {}) {
    super(source);
  }
}
