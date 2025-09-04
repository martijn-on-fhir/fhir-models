import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { InsurancePlanPlanSpecificCostBenefit } from './InsurancePlanPlanSpecificCostBenefit';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class InsurancePlanPlanSpecificCost extends BackboneElement {
  /**
   * List of the specific benefits under this category of benefit.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanPlanSpecificCostBenefit)
  benefit?: InsurancePlanPlanSpecificCostBenefit[];

  /**
   * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * Constructor for InsurancePlanPlanSpecificCost
   */
  constructor(source: Partial<InsurancePlanPlanSpecificCost> = {}) {
    super(source);
  }
}
