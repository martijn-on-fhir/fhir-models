import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MedicinalProductIngredientSpecifiedSubstance } from '../backbone/MedicinalProductIngredientSpecifiedSubstance';
import { MedicinalProductIngredientSubstance } from '../backbone/MedicinalProductIngredientSubstance';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductIngredient extends DomainResource implements fhir.MedicinalProductIngredient {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicinalProductIngredient' as const;

  /**
   * If the ingredient is a known or suspected allergen.
   */
  @IsOptional()
  @IsBoolean()
  allergenicIndicator?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _allergenicIndicator?: Element;

  /**
   * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct UR
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * Manufacturer of this Ingredient.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturer?: Reference[];

  /**
   * Ingredient role e.g. Active ingredient, excipient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /**
   * A specified substance that comprises this ingredient.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductIngredientSpecifiedSubstance)
  specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstance[];

  /**
   * The ingredient substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicinalProductIngredientSubstance)
  substance?: MedicinalProductIngredientSubstance;

  /**
   * Constructor for MedicinalProductIngredient
   */
  constructor(source: Partial<MedicinalProductIngredient> = {}) {
    super(source);
    this.resourceType = 'MedicinalProductIngredient';
  }
}
