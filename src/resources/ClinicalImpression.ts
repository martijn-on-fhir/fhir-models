import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { ClinicalImpressionFinding } from '../backbone/ClinicalImpressionFinding';
import { ClinicalImpressionInvestigation } from '../backbone/ClinicalImpressionInvestigation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClinicalImpression extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ClinicalImpression' as const;

  /**
   * The clinician performing the assessment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  assessor?: Reference;

  /**
   * This is present as a place-holder only and may be removed based on feedback/work group opinion.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Indicates when the documentation of the assessment was complete.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status p
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
   */
  @IsOptional()
  @IsString()
  effectiveDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _effectiveDateTime?: Element;

  /**
   * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClinicalImpressionFinding)
  finding?: ClinicalImpressionFinding[];

  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best prac
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly dependi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClinicalImpressionInvestigation)
  investigation?: ClinicalImpressionInvestigation[];

  /**
   * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment i
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  previous?: Reference;

  /**
   * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  problem?: Reference[];

  /**
   * Estimate of likely outcome.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  prognosisCodeableConcept?: CodeableConcept[];

  /**
   * RiskAssessment expressing likely outcome.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  prognosisReference?: Reference[];

  /**
   * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evide
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  protocol?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _protocol?: Element[];

  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impr
   */
  @IsOptional()
  @IsIn(['in-progress', 'completed', 'entered-in-error'])
  status?: ('in-progress'|'completed'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled". [distinct reason co
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept;

  /**
   * The patient or group of individuals assessed as part of this record.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * A text summary of the investigations and the diagnosis.
   */
  @IsOptional()
  @IsString()
  summary?: string;

  /**
   * Constructor for ClinicalImpression
   */
  constructor(source: Partial<ClinicalImpression> = {}) {
    super(source);
    this.resourceType = 'ClinicalImpression';
  }
}
