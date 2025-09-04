import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Ratio } from '../elements/Ratio';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends BackboneElement {
  /**
   * The country or countries for which the strength range applies.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  country?: CodeableConcept[];

  /**
   * For when strength is measured at a particular point or distance.
   */
  @IsOptional()
  @IsString()
  measurementPoint?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _measurementPoint?: Element;

  /**
   * Strength expressed in terms of a reference substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  strength?: Ratio;

  /**
   * Strength expressed in terms of a reference substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  strengthLowLimit?: Ratio;

  /**
   * Relevant reference substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substance?: CodeableConcept;

  /**
   * Constructor for MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength
   */
  constructor(source: Partial<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength> = {}) {
    super(source);
  }
}
