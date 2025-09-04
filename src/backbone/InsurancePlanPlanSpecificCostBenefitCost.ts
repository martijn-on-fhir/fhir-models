import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class InsurancePlanPlanSpecificCostBenefitCost extends BackboneElement implements fhir.InsurancePlanPlanSpecificCostBenefitCost {
  /**
   * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  applicability?: CodeableConcept;

  /**
   * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  qualifiers?: CodeableConcept[];

  /**
   * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  value?: Quantity;

  /**
   * Constructor for InsurancePlanPlanSpecificCostBenefitCost
   */
  constructor(source: Partial<InsurancePlanPlanSpecificCostBenefitCost> = {}) {
    super(source);
  }
}
