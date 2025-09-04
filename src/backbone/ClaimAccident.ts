import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimAccident extends BackboneElement implements fhir.ClaimAccident {
  /**
   * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * The physical location of the accident event.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  locationAddress?: Address;

  /**
   * The physical location of the accident event.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  locationReference?: Reference;

  /**
   * The type or context of the accident event for the purposes of selection of potential insurance coverages and determinati
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for ClaimAccident
   */
  constructor(source: Partial<ClaimAccident> = {}) {
    super(source);
  }
}
