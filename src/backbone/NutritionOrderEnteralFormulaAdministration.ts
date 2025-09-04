import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Quantity } from '../elements/Quantity';
import { Ratio } from '../elements/Ratio';
import { Timing } from './Timing';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class NutritionOrderEnteralFormulaAdministration extends BackboneElement implements fhir.NutritionOrderEnteralFormulaAdministration {
  /**
   * The volume of formula to provide to the patient per the specified administration schedule.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio data
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  rateQuantity?: Quantity;

  /**
   * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio data
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  rateRatio?: Ratio;

  /**
   * The time period and frequency at which the enteral formula should be delivered to the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  schedule?: Timing;

  /**
   * Constructor for NutritionOrderEnteralFormulaAdministration
   */
  constructor(source: Partial<NutritionOrderEnteralFormulaAdministration> = {}) {
    super(source);
  }
}
