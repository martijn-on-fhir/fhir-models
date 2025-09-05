import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DataRequirement } from '../elements/DataRequirement';
import { Duration } from '../elements/Duration';
import { Expression } from '../elements/Expression';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { Timing } from './Timing';
import { TriggerDefinition } from '../elements/TriggerDefinition';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EvidenceVariableCharacteristic extends BackboneElement {
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  definitionReference?: Reference;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using 
   */
  @IsOptional()
  @IsString()
  definitionCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definitionCanonical?: Element;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  definitionCodeableConcept?: CodeableConcept;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  definitionExpression?: Expression;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => DataRequirement)
  definitionDataRequirement?: DataRequirement;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TriggerDefinition)
  definitionTriggerDefinition?: TriggerDefinition;

  /**
   * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-use
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * When true, members with this characteristic are excluded from the element.
   */
  @IsOptional()
  @IsBoolean()
  exclude?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _exclude?: Element;

  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  @IsOptional()
  @IsIn(['mean', 'median', 'mean-of-mean', 'mean-of-median', 'median-of-mean', 'median-of-median'])
  groupMeasure?: ('mean'|'median'|'mean-of-mean'|'mean-of-median'|'median-of-mean'|'median-of-median');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _groupMeasure?: Element;

  /**
   * Indicates what effective period the study covers.
   */
  @IsOptional()
  @IsString()
  participantEffectiveDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _participantEffectiveDateTime?: Element;

  /**
   * Indicates what effective period the study covers.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  participantEffectivePeriod?: Period;

  /**
   * Indicates what effective period the study covers.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  participantEffectiveDuration?: Duration;

  /**
   * Indicates what effective period the study covers.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  participantEffectiveTiming?: Timing;

  /**
   * Indicates duration from the participant's study entry.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  timeFromStart?: Duration;

  /**
   * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  usageContext?: UsageContext[];

  /**
   * Constructor for EvidenceVariableCharacteristic
   */
  constructor(source: Partial<EvidenceVariableCharacteristic> = {}) {
    super(source);
  }
}
