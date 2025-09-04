import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSpecificationProperty extends BackboneElement {
  /**
   * Quantitative value for this property.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amountQuantity?: Quantity;

  /**
   * Quantitative value for this property.
   */
  @IsOptional()
  @IsString()
  amountString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _amountString?: Element;

  /**
   * A category for this property, e.g. Physical, Chemical, Enzymatic.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * Property type e.g. viscosity, pH, isoelectric point.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  definingSubstanceReference?: Reference;

  /**
   * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  definingSubstanceCodeableConcept?: CodeableConcept;

  /**
   * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
   */
  @IsOptional()
  @IsString()
  parameters?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _parameters?: Element;

  /**
   * Constructor for SubstanceSpecificationProperty
   */
  constructor(source: Partial<SubstanceSpecificationProperty> = {}) {
    super(source);
  }
}
