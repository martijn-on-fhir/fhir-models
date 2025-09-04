import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Age } from '../elements/Age';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { Period } from '../elements/Period';
import { Range } from '../elements/Range';
import { Reference } from '../elements/Reference';
import { RelatedArtifact } from '../elements/RelatedArtifact';
import { RequestGroupActionCondition } from './RequestGroupActionCondition';
import { RequestGroupActionRelatedAction } from './RequestGroupActionRelatedAction';
import { Timing } from './Timing';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class RequestGroupAction extends BackboneElement {
  /**
   * Sub actions.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RequestGroupAction)
  action?: RequestGroupAction[];

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
   * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section 
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
  @Type(() => RequestGroupActionCondition)
  condition?: RequestGroupActionCondition[];

  /**
   * A short description of the action used to provide a summary to display to the user.
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
   * The participant that should perform or be responsible for this action.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  participant?: Reference[];

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
   * A relationship to another action such as "before" or "30-60 minutes after start of".
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RequestGroupActionRelatedAction)
  relatedAction?: RequestGroupActionRelatedAction[];

  /**
   * Defines expectations around whether an action is required.
   */
  @IsOptional()
  @IsIn(['must', 'could', 'must-unless-documented'])
  requiredBehavior?: ('must'|'could'|'must-unless-documented');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _requiredBehavior?: Element;

  /**
   * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  resource?: Reference;

  /**
   * Defines the selection behavior for the action and its children.
   */
  @IsOptional()
  @IsIn(['any', 'all', 'all-or-none', 'exactly-one', 'at-most-one', 'one-or-more'])
  selectionBehavior?: ('any'|'all'|'all-or-none'|'exactly-one'|'at-most-one'|'one-or-more');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _selectionBehavior?: Element;

  /**
   * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the 
   */
  @IsOptional()
  @IsString()
  textEquivalent?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _textEquivalent?: Element;

  /**
   * An optional value describing when the action should be performed.
   */
  @IsOptional()
  @IsString()
  timingDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _timingDateTime?: Element;

  /**
   * An optional value describing when the action should be performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  timingAge?: Age;

  /**
   * An optional value describing when the action should be performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timingPeriod?: Period;

  /**
   * An optional value describing when the action should be performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  timingDuration?: Duration;

  /**
   * Constructor for RequestGroupAction
   */
  constructor(source: Partial<RequestGroupAction> = {}) {
    super(source);
  }
}
