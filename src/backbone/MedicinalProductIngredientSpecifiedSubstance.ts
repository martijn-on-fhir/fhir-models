import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductIngredientSpecifiedSubstanceStrength } from './MedicinalProductIngredientSpecifiedSubstanceStrength';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductIngredientSpecifiedSubstance extends BackboneElement {
  /**
   * The specified substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Confidentiality level of the specified substance as the ingredient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  confidentiality?: CodeableConcept;

  /**
   * The group of specified substance, e.g. group 1 to 4.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  group?: CodeableConcept;

  /**
   * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductIngredientSpecifiedSubstanceStrength)
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];

  /**
   * Constructor for MedicinalProductIngredientSpecifiedSubstance
   */
  constructor(source: Partial<MedicinalProductIngredientSpecifiedSubstance> = {}) {
    super(source);
  }
}
