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
export class ExplanationOfBenefitBenefitBalanceFinancial extends BackboneElement implements fhir.ExplanationOfBenefitBenefitBalanceFinancial {
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  @IsOptional()
  @IsNumber()
  allowedUnsignedInt?: number;

  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  @IsOptional()
  @IsString()
  allowedString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _allowedString?: Element;

  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  allowedMoney?: Money;

  /**
   * For example: deductible, visits, benefit amount.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * The quantity of the benefit which have been consumed to date.
   */
  @IsOptional()
  @IsNumber()
  usedUnsignedInt?: number;

  /**
   * The quantity of the benefit which have been consumed to date.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  usedMoney?: Money;

  /**
   * Constructor for ExplanationOfBenefitBenefitBalanceFinancial
   */
  constructor(source: Partial<ExplanationOfBenefitBenefitBalanceFinancial> = {}) {
    super(source);
  }
}
