import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength } from './MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength';
import { Ratio } from '../elements/Ratio';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductIngredientSpecifiedSubstanceStrength extends BackboneElement {
  /**
   * The strength per unitary volume (or mass).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  concentration?: Ratio;

  /**
   * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  concentrationLowLimit?: Ratio;

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
   * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  presentation?: Ratio;

  /**
   * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, thi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  presentationLowLimit?: Ratio;

  /**
   * Strength expressed in terms of a reference substance.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength)
  referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];

  /**
   * Constructor for MedicinalProductIngredientSpecifiedSubstanceStrength
   */
  constructor(source: Partial<MedicinalProductIngredientSpecifiedSubstanceStrength> = {}) {
    super(source);
  }
}
