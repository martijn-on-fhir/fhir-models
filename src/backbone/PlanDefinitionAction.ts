import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Age } from '../elements/Age';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DataRequirement } from '../elements/DataRequirement';
import { Duration } from '../elements/Duration';
import { Period } from '../elements/Period';
import { PlanDefinitionActionCondition } from './PlanDefinitionActionCondition';
import { PlanDefinitionActionDynamicValue } from './PlanDefinitionActionDynamicValue';
import { PlanDefinitionActionParticipant } from './PlanDefinitionActionParticipant';
import { PlanDefinitionActionRelatedAction } from './PlanDefinitionActionRelatedAction';
import { Range } from '../elements/Range';
import { Reference } from '../elements/Reference';
import { RelatedArtifact } from '../elements/RelatedArtifact';
import { Timing } from './Timing';
import { TriggerDefinition } from '../elements/TriggerDefinition';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PlanDefinitionAction extends BackboneElement {
  /**
   * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-ac
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionAction)
  action?: PlanDefinitionAction[];

  /**
   * Defines whether the action can be selected multiple times.
   */
  @IsOptional()
  @IsIn(['single', 'multiple'])
  cardinalityBehavior?: ('single'|'multiple');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _cardinalityBehavior?: Element;

  /**
   * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the sectio
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /**
   * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall cond
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionActionCondition)
  condition?: PlanDefinitionActionCondition[];

  /**
   * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be 
   */
  @IsOptional()
  @IsString()
  definitionCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definitionCanonical?: Element;

  /**
   * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be 
   */
  @IsOptional()
  @IsString()
  definitionUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definitionUri?: Element;

  /**
   * A brief description of the action used to provide a summary to display to the user.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Informat
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  documentation?: RelatedArtifact[];

  /**
   * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionActionDynamicValue)
  dynamicValue?: PlanDefinitionActionDynamicValue[];

  /**
   * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  goalId?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _goalId?: Element[];

  /**
   * Defines the grouping behavior for the action and its children.
   */
  @IsOptional()
  @IsIn(['visual-group', 'logical-group', 'sentence-group'])
  groupingBehavior?: ('visual-group'|'logical-group'|'sentence-group');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _groupingBehavior?: Element;

  /**
   * Defines input data requirements for the action.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirement)
  input?: DataRequirement[];

  /**
   * Defines the outputs of the action, if any.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirement)
  output?: DataRequirement[];

  /**
   * Indicates who should participate in performing the action described.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionActionParticipant)
  participant?: PlanDefinitionActionParticipant[];

  /**
   * Defines whether the action should usually be preselected.
   */
  @IsOptional()
  @IsIn(['yes', 'no'])
  precheckBehavior?: ('yes'|'no');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _precheckBehavior?: Element;

  /**
   * A user-visible prefix for the action.
   */
  @IsOptional()
  @IsString()
  prefix?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _prefix?: Element;

  /**
   * Indicates how quickly the action should be addressed with respect to other actions.
   */
  @IsOptional()
  @IsIn(['routine', 'urgent', 'asap', 'stat'])
  priority?: ('routine'|'urgent'|'asap'|'stat');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _priority?: Element;

  /**
   * This is different than the clinical evidence documentation, it's an actual business description of the reason for perfor
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reason?: CodeableConcept[];

  /**
   * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of th
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlanDefinitionActionRelatedAction)
  relatedAction?: PlanDefinitionActionRelatedAction[];

  /**
   * Defines the required behavior for the action.
   */
  @IsOptional()
  @IsIn(['must', 'could', 'must-unless-documented'])
  requiredBehavior?: ('must'|'could'|'must-unless-documented');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _requiredBehavior?: Element;

  /**
   * Constructor for PlanDefinitionAction
   */
  constructor(source: Partial<PlanDefinitionAction> = {}) {
    super(source);
  }
}
