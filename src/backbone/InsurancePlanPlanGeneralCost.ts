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
export class InsurancePlanPlanGeneralCost extends BackboneElement implements fhir.InsurancePlanPlanGeneralCost {
  /**
   * Additional information about the general costs associated with this plan.
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * Value of the cost.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  cost?: Money;

  /**
   * Number of participants enrolled in the plan.
   */
  @IsOptional()
  @IsNumber()
  groupSize?: number;

  /**
   * Type of cost.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for InsurancePlanPlanGeneralCost
   */
  constructor(source: Partial<InsurancePlanPlanGeneralCost> = {}) {
    super(source);
  }
}
