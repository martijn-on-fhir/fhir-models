import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { RiskAssessmentPrediction } from '../backbone/RiskAssessmentPrediction';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class RiskAssessment extends DomainResource implements fhir.RiskAssessment {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'RiskAssessment' as const;

  /**
   * A reference to the request that is fulfilled by this risk assessment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  basedOn?: Reference;

  /**
   * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Co
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basis?: Reference[];

  /**
   * The type of the risk assessment performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  condition?: Reference;

  /**
   * The encounter where the assessment was performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Business identifier assigned to the risk assessment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The algorithm, process or mechanism used to evaluate the risk.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /**
   * A description of the steps that might be taken to reduce the identified risk(s).
   */
  @IsOptional()
  @IsString()
  mitigation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mitigation?: Element;

  /**
   * Additional comments about the risk assessment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceDateTime?: Element;

  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /**
   * A reference to a resource that this risk assessment is part of, such as a Procedure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  parent?: Reference;

  /**
   * The provider or software application that performed the assessment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /**
   * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RiskAssessmentPrediction)
  prediction?: RiskAssessmentPrediction[];

  /**
   * The reason the risk assessment was performed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * Resources supporting the reason the risk assessment was performed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * The status of the RiskAssessment, using the same statuses as an Observation.
   */
  @IsOptional()
  @IsIn(['registered', 'preliminary', 'final', 'amended', 'corrected', 'cancelled', 'entered-in-error', 'unknown'])
  status?: ('registered'|'preliminary'|'final'|'amended'|'corrected'|'cancelled'|'entered-in-error'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The patient or group the risk assessment applies to.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Constructor for RiskAssessment
   */
  constructor(source: Partial<RiskAssessment> = {}) {
    super(source);
    this.resourceType = 'RiskAssessment';
  }
}
