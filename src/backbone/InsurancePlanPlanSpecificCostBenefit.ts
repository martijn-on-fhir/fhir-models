import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { InsurancePlanPlanSpecificCostBenefitCost } from './InsurancePlanPlanSpecificCostBenefitCost';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class InsurancePlanPlanSpecificCostBenefit extends BackboneElement {
  /**
   * List of the costs associated with a specific benefit.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanPlanSpecificCostBenefitCost)
  cost?: InsurancePlanPlanSpecificCostBenefitCost[];

  /**
   * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency r
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for InsurancePlanPlanSpecificCostBenefit
   */
  constructor(source: Partial<InsurancePlanPlanSpecificCostBenefit> = {}) {
    super(source);
  }
}
