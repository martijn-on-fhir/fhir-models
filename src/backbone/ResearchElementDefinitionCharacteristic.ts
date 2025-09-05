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
import { Timing } from './Timing';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ResearchElementDefinitionCharacteristic extends BackboneElement {
  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  definitionCodeableConcept?: CodeableConcept;

  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using 
   */
  @IsOptional()
  @IsString()
  definitionCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definitionCanonical?: Element;

  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  definitionExpression?: Expression;

  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => DataRequirement)
  definitionDataRequirement?: DataRequirement;

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
   * A narrative description of the time period the study covers.
   */
  @IsOptional()
  @IsString()
  participantEffectiveDescription?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _participantEffectiveDescription?: Element;

  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  @IsOptional()
  @IsIn(['mean', 'median', 'mean-of-mean', 'mean-of-median', 'median-of-mean', 'median-of-median'])
  participantEffectiveGroupMeasure?: ('mean'|'median'|'mean-of-mean'|'mean-of-median'|'median-of-mean'|'median-of-median');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _participantEffectiveGroupMeasure?: Element;

  /**
   * Indicates duration from the participant's study entry.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  participantEffectiveTimeFromStart?: Duration;

  /**
   * Indicates what effective period the study covers.
   */
  @IsOptional()
  @IsString()
  studyEffectiveDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _studyEffectiveDateTime?: Element;

  /**
   * Indicates what effective period the study covers.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  studyEffectivePeriod?: Period;

  /**
   * Indicates what effective period the study covers.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  studyEffectiveDuration?: Duration;

  /**
   * Indicates what effective period the study covers.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  studyEffectiveTiming?: Timing;

  /**
   * A narrative description of the time period the study covers.
   */
  @IsOptional()
  @IsString()
  studyEffectiveDescription?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _studyEffectiveDescription?: Element;

  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  @IsOptional()
  @IsIn(['mean', 'median', 'mean-of-mean', 'mean-of-median', 'median-of-mean', 'median-of-median'])
  studyEffectiveGroupMeasure?: ('mean'|'median'|'mean-of-mean'|'mean-of-median'|'median-of-mean'|'median-of-median');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _studyEffectiveGroupMeasure?: Element;

  /**
   * Indicates duration from the study initiation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  studyEffectiveTimeFromStart?: Duration;

  /**
   * Specifies the UCUM unit for the outcome.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unitOfMeasure?: CodeableConcept;

  /**
   * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  usageContext?: UsageContext[];

  /**
   * Constructor for ResearchElementDefinitionCharacteristic
   */
  constructor(source: Partial<ResearchElementDefinitionCharacteristic> = {}) {
    super(source);
  }
}
