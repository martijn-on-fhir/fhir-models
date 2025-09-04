import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class NutritionOrderOralDietTexture extends BackboneElement implements fhir.NutritionOrderOralDietTexture {
  /**
   * Coupled with the `texture.modifier`; could be (All Foods).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  foodType?: CodeableConcept;

  /**
   * Coupled with the foodType (Meat).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept;

  /**
   * Constructor for NutritionOrderOralDietTexture
   */
  constructor(source: Partial<NutritionOrderOralDietTexture> = {}) {
    super(source);
  }
}
