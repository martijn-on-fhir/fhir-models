import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationIngredient extends BackboneElement {
  /**
   * Indication of whether this ingredient affects the therapeutic action of the drug.
   */
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _isActive?: Element;

  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /**
   * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is ex
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  strength?: Ratio;

  /**
   * Constructor for MedicationIngredient
   */
  constructor(source: Partial<MedicationIngredient> = {}) {
    super(source);
  }
}
