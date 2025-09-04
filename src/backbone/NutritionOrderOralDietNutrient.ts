import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class NutritionOrderOralDietNutrient extends BackboneElement implements fhir.NutritionOrderOralDietNutrient {
  /**
   * The quantity of the specified nutrient to include in diet.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amount?: Quantity;

  /**
   * The nutrient that is being modified such as carbohydrate or sodium.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept;

  /**
   * Constructor for NutritionOrderOralDietNutrient
   */
  constructor(source: Partial<NutritionOrderOralDietNutrient> = {}) {
    super(source);
  }
}
