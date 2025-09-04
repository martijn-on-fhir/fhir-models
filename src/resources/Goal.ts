import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { GoalTarget } from '../backbone/GoalTarget';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Goal extends DomainResource implements fhir.Goal {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Goal' as const;

  /**
   * Describes the progression, or lack thereof, towards the goal against the target.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  achievementStatus?: CodeableConcept;

  /**
   * The identified conditions and other health record elements that are intended to be addressed by the goal.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  addresses?: Reference[];

  /**
   * Indicates a category the goal falls within.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * If no code is available, use CodeableConcept.text.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  description?: CodeableConcept;

  /**
   * This is the individual responsible for establishing the goal, not necessarily who recorded it.  (For that, use the Prove
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  expressedBy?: Reference;

  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best prac
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * This element is labeled as a modifier because the lifecycleStatus contains codes that mark the resource as not currently
   */
  @IsOptional()
  @IsIn(['proposed', 'planned', 'accepted', 'active', 'on-hold', 'completed', 'cancelled', 'entered-in-error', 'rejected'])
  lifecycleStatus?: ('proposed'|'planned'|'accepted'|'active'|'on-hold'|'completed'|'cancelled'|'entered-in-error'|'rejected');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lifecycleStatus?: Element;

  /**
   * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Note that this should not duplicate the goal status.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  outcomeCode?: CodeableConcept[];

  /**
   * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a targ
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  outcomeReference?: Reference[];

  /**
   * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspe
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /**
   * The date or event after which the goal should begin being pursued.
   */
  @IsOptional()
  @IsString()
  startDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _startDate?: Element;

  /**
   * The date or event after which the goal should begin being pursued.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  startCodeableConcept?: CodeableConcept;

  /**
   * To see the date for past statuses, query history.
   */
  @IsOptional()
  @IsString()
  statusDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _statusDate?: Element;

  /**
   * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
   */
  @IsOptional()
  @IsString()
  statusReason?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _statusReason?: Element;

  /**
   * Identifies the patient, group or organization for whom the goal is being established.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GoalTarget)
  target?: GoalTarget[];

  /**
   * Constructor for Goal
   */
  constructor(source: Partial<Goal> = {}) {
    super(source);
    this.resourceType = 'Goal';
  }
}
