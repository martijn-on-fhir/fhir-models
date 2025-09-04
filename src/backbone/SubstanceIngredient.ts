import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceIngredient extends BackboneElement {
  /**
   * The amount of the ingredient in the substance - a concentration ratio.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  quantity?: Ratio;

  /**
   * Another substance that is a component of this substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substanceCodeableConcept?: CodeableConcept;

  /**
   * Another substance that is a component of this substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  substanceReference?: Reference;

  /**
   * Constructor for SubstanceIngredient
   */
  constructor(source: Partial<SubstanceIngredient> = {}) {
    super(source);
  }
}
