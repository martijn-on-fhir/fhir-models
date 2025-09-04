import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSpecificationRelationship extends BackboneElement implements fhir.SubstanceSpecificationRelationship {
  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the a
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amountQuantity?: Quantity;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the a
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  amountRange?: Range;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the a
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  amountRatio?: Ratio;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the a
   */
  @IsOptional()
  @IsString()
  amountString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _amountString?: Element;

  /**
   * For use when the numeric.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  amountRatioLowLimit?: Ratio;

  /**
   * An operator for the amount, for example "average", "approximately", "less than".
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  amountType?: CodeableConcept;

  /**
   * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme,
   */
  @IsOptional()
  @IsBoolean()
  isDefining?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _isDefining?: Element;

  /**
   * For example "salt to parent", "active moiety", "starting material".
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept;

  /**
   * Supporting literature.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /**
   * A pointer to another substance, as a resource or just a representational code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  substanceReference?: Reference;

  /**
   * A pointer to another substance, as a resource or just a representational code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substanceCodeableConcept?: CodeableConcept;

  /**
   * Constructor for SubstanceSpecificationRelationship
   */
  constructor(source: Partial<SubstanceSpecificationRelationship> = {}) {
    super(source);
  }
}
