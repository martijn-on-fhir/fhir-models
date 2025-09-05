import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Duration } from '../elements/Duration';
import { Range } from '../elements/Range';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PlanDefinitionActionRelatedAction extends BackboneElement {
  /**
   * The element id of the related action.
   */
  @IsOptional()
  @IsString()
  actionId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _actionId?: Element;

  /**
   * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  offsetDuration?: Duration;

  /**
   * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  offsetRange?: Range;

  /**
   * The relationship of this action to the related action.
   */
  @IsOptional()
  @IsIn(['before-start', 'before', 'before-end', 'concurrent-with-start', 'concurrent', 'concurrent-with-end', 'after-start', 'after', 'after-end'])
  relationship?: ('before-start'|'before'|'before-end'|'concurrent-with-start'|'concurrent'|'concurrent-with-end'|'after-start'|'after'|'after-end');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _relationship?: Element;

  /**
   * Constructor for PlanDefinitionActionRelatedAction
   */
  constructor(source: Partial<PlanDefinitionActionRelatedAction> = {}) {
    super(source);
  }
}
