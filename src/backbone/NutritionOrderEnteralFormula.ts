import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { NutritionOrderEnteralFormulaAdministration } from './NutritionOrderEnteralFormulaAdministration';
import { Quantity } from '../elements/Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class NutritionOrderEnteralFormula extends BackboneElement {
  /**
   * The product or brand name of the type of modular component to be added to the formula.
   */
  @IsOptional()
  @IsString()
  additiveProductName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _additiveProductName?: Element;

  /**
   * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mix
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  additiveType?: CodeableConcept;

  /**
   * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this res
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutritionOrderEnteralFormulaAdministration)
  administration?: NutritionOrderEnteralFormulaAdministration[];

  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  @IsOptional()
  @IsString()
  administrationInstruction?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _administrationInstruction?: Element;

  /**
   * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
   */
  @IsOptional()
  @IsString()
  baseFormulaProductName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _baseFormulaProductName?: Element;

  /**
   * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  baseFormulaType?: CodeableConcept;

  /**
   * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  caloricDensity?: Quantity;

  /**
   * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 2
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  maxVolumeToDeliver?: Quantity;

  /**
   * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  routeofAdministration?: CodeableConcept;

  /**
   * Constructor for NutritionOrderEnteralFormula
   */
  constructor(source: Partial<NutritionOrderEnteralFormula> = {}) {
    super(source);
  }
}
