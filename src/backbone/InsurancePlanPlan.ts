import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { InsurancePlanPlanGeneralCost } from './InsurancePlanPlanGeneralCost';
import { InsurancePlanPlanSpecificCost } from './InsurancePlanPlanSpecificCost';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class InsurancePlanPlan extends BackboneElement implements fhir.InsurancePlanPlan {
  /**
   * The geographic region in which a health insurance plan's benefits apply.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  coverageArea?: Reference[];

  /**
   * Overall costs associated with the plan.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanPlanGeneralCost)
  generalCost?: InsurancePlanPlanGeneralCost[];

  /**
   * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propaga
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  network?: Reference[];

  /**
   * Costs associated with the coverage provided by the product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanPlanSpecificCost)
  specificCost?: InsurancePlanPlanSpecificCost[];

  /**
   * Type of plan. For example, "Platinum" or "High Deductable".
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for InsurancePlanPlan
   */
  constructor(source: Partial<InsurancePlanPlan> = {}) {
    super(source);
  }
}
