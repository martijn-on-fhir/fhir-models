import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { PlanDefinitionGoalTarget } from './PlanDefinitionGoalTarget';
import { RelatedArtifact } from '../elements/RelatedArtifact';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PlanDefinitionGoal extends BackboneElement {
  /**
   * Identifies problems, conditions, issues, or concerns the goal is intended to address.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  addresses?: CodeableConcept[];

  /**
   * Indicates a category the goal falls within.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * If no code is available, use CodeableConcept.text.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  description?: CodeableConcept;

  /**
   * Didactic or other informational resources associated with the goal that provide further supporting information about the
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  documentation?: RelatedArtifact[];

  /**
   * Identifies the expected level of importance associated with reaching/sustaining the defined goal.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /**
   * The event after which the goal should begin being pursued.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  start?: CodeableConcept;

  /**
   * Indicates what should be done and within what timeframe.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionGoalTarget)
  target?: PlanDefinitionGoalTarget[];

  /**
   * Constructor for PlanDefinitionGoal
   */
  constructor(source: Partial<PlanDefinitionGoal> = {}) {
    super(source);
  }
}
