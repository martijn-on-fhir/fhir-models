import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSpecificationMoiety extends BackboneElement {
  /**
   * Quantitative value for this moiety.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amountQuantity?: Quantity;

  /**
   * Quantitative value for this moiety.
   */
  @IsOptional()
  @IsString()
  amountString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _amountString?: Element;

  /**
   * Identifier by which this moiety substance is known.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * Molecular formula.
   */
  @IsOptional()
  @IsString()
  molecularFormula?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _molecularFormula?: Element;

  /**
   * Textual name for this moiety substance.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Optical activity type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  opticalActivity?: CodeableConcept;

  /**
   * Role that the moiety is playing.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /**
   * Stereochemistry type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  stereochemistry?: CodeableConcept;

  /**
   * Constructor for SubstanceSpecificationMoiety
   */
  constructor(source: Partial<SubstanceSpecificationMoiety> = {}) {
    super(source);
  }
}
