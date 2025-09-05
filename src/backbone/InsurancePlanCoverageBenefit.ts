import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { InsurancePlanCoverageBenefitLimit } from './InsurancePlanCoverageBenefitLimit';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class InsurancePlanCoverageBenefit extends BackboneElement {
  /**
   * The specific limits on the benefit.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanCoverageBenefitLimit)
  limit?: InsurancePlanCoverageBenefitLimit[];

  /**
   * The referral requirements to have access/coverage for this benefit.
   */
  @IsOptional()
  @IsString()
  requirement?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _requirement?: Element;

  /**
   * Type of benefit (primary care; speciality care; inpatient; outpatient).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for InsurancePlanCoverageBenefit
   */
  constructor(source: Partial<InsurancePlanCoverageBenefit> = {}) {
    super(source);
  }
}
