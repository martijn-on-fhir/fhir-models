import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { AuditEventAgent } from '../backbone/AuditEventAgent';
import { AuditEventEntity } from '../backbone/AuditEventEntity';
import { AuditEventSource } from '../backbone/AuditEventSource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { Period } from '../elements/Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AuditEvent extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'AuditEvent' as const;

  /**
   * Indicator for type of action performed during the event that generated the audit.
   */
  @IsOptional()
  @IsString()
  action?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _action?: Element;

  /**
   * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity. For example,
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AuditEventAgent)
  agent?: AuditEventAgent[];

  /**
   * Required unless the values for event identification, agent identification, and audit source identification are sufficien
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AuditEventEntity)
  entity?: AuditEventEntity[];

  /**
   * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. Fo
   */
  @IsOptional()
  @IsString()
  outcome?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _outcome?: Element;

  /**
   * A free text description of the outcome of the event.
   */
  @IsOptional()
  @IsString()
  outcomeDesc?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _outcomeDesc?: Element;

  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity tim
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEven
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  purposeOfEvent?: CodeableConcept[];

  /**
   * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
   */
  @IsOptional()
  @IsString()
  recorded?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _recorded?: Element;

  /**
   * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => AuditEventSource)
  source?: AuditEventSource;

  /**
   * Identifier for the category of event.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  subtype?: Coding[];

  /**
   * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  type?: Coding;

  /**
   * Constructor for AuditEvent
   */
  constructor(source: Partial<AuditEvent> = {}) {
    super(source);
    this.resourceType = 'AuditEvent';
  }
}
