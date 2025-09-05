import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { NutritionOrderOralDietNutrient } from './NutritionOrderOralDietNutrient';
import { NutritionOrderOralDietTexture } from './NutritionOrderOralDietTexture';
import { Timing } from './Timing';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class NutritionOrderOralDiet extends BackboneElement {
  /**
   * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  fluidConsistencyType?: CodeableConcept[];

  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  @IsOptional()
  @IsString()
  instruction?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _instruction?: Element;

  /**
   * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutritionOrderOralDietNutrient)
  nutrient?: NutritionOrderOralDietNutrient[];

  /**
   * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all sc
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Timing)
  schedule?: Timing[];

  /**
   * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutritionOrderOralDietTexture)
  texture?: NutritionOrderOralDietTexture[];

  /**
   * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Constructor for NutritionOrderOralDiet
   */
  constructor(source: Partial<NutritionOrderOralDiet> = {}) {
    super(source);
  }
}
