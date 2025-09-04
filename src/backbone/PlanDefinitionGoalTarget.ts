import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PlanDefinitionGoalTarget extends BackboneElement implements fhir.PlanDefinitionGoalTarget {
  /**
   * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the h
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  detailQuantity?: Quantity;

  /**
   * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the h
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  detailRange?: Range;

  /**
   * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the h
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  detailCodeableConcept?: CodeableConcept;

  /**
   * Indicates the timeframe after the start of the goal in which the goal should be met.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  due?: Duration;

  /**
   * The parameter whose value is to be tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  measure?: CodeableConcept;

  /**
   * Constructor for PlanDefinitionGoalTarget
   */
  constructor(source: Partial<PlanDefinitionGoalTarget> = {}) {
    super(source);
  }
}
