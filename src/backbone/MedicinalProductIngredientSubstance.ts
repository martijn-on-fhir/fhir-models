import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductIngredientSpecifiedSubstanceStrength } from './MedicinalProductIngredientSpecifiedSubstanceStrength';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductIngredientSubstance extends BackboneElement implements fhir.MedicinalProductIngredientSubstance {
  /**
   * The ingredient substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductIngredientSpecifiedSubstanceStrength)
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];

  /**
   * Constructor for MedicinalProductIngredientSubstance
   */
  constructor(source: Partial<MedicinalProductIngredientSubstance> = {}) {
    super(source);
  }
}
