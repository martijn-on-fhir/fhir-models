import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponseTotal extends BackboneElement implements fhir.ClaimResponseTotal {
  /**
   * Monetary total amount associated with the category.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /**
   * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * Constructor for ClaimResponseTotal
   */
  constructor(source: Partial<ClaimResponseTotal> = {}) {
    super(source);
  }
}
