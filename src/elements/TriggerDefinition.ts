import 'reflect-metadata';
import {IsArray, IsIn, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {Element} from '../base/Element';
import {DataRequirement} from './DataRequirement';
import {Expression} from './Expression';
import {Reference} from './Reference';
import {Timing} from '../backbone'

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiti
 */
export class TriggerDefinition extends Element {
  /**
   * This element can be only be specified for data type triggers and provides additional semantics for the trigger. The context available within the condi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  condition?: Expression;

  /**
   * This element shall be present for any data type trigger.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirement)
  data?: DataRequirement[];

  /**
   * An event name can be provided for all event types, but is required for named events. If a name is provided for a type other than named events, it is c
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The timing of the event (if this is a periodic trigger).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  timingTiming?: Timing;

  /**
   * The timing of the event (if this is a periodic trigger).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  timingReference?: Reference;

  /**
   * The timing of the event (if this is a periodic trigger).
   */
  @IsOptional()
  @IsString()
  timingDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _timingDate?: Element;

  /**
   * The timing of the event (if this is a periodic trigger).
   */
  @IsOptional()
  @IsString()
  timingDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _timingDateTime?: Element;

  /**
   * The type of triggering event.
   */
  @IsOptional()
  @IsIn(['named-event', 'periodic', 'data-changed', 'data-added', 'data-modified', 'data-removed', 'data-accessed', 'data-access-ended'])
  type: ('named-event'|'periodic'|'data-changed'|'data-added'|'data-modified'|'data-removed'|'data-accessed'|'data-access-ended');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for TriggerDefinition
   */
  constructor(source: Partial<TriggerDefinition> = {}) {
    super(source);
  }
}
