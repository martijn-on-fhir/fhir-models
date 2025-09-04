import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DetectedIssueEvidence } from '../backbone/DetectedIssueEvidence';
import { DetectedIssueMitigation } from '../backbone/DetectedIssueMitigation';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DetectedIssue extends DomainResource implements fhir.DetectedIssue {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'DetectedIssue' as const;

  /**
   * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacis
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /**
   * Identifies the general type of issue identified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
   */
  @IsOptional()
  @IsString()
  detail?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _detail?: Element;

  /**
   * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceRespon
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DetectedIssueEvidence)
  evidence?: DetectedIssueEvidence[];

  /**
   * The date or period when the detected issue was initially identified.
   */
  @IsOptional()
  @IsString()
  identifiedDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _identifiedDateTime?: Element;

  /**
   * The date or period when the detected issue was initially identified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  identifiedPeriod?: Period;

  /**
   * Business identifier associated with the detected issue record.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, th
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  implicated?: Reference[];

  /**
   * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DetectedIssueMitigation)
  mitigation?: DetectedIssueMitigation[];

  /**
   * Indicates the patient whose record the detected issue is associated with.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
   */
  @IsOptional()
  @IsString()
  reference?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _reference?: Element;

  /**
   * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   */
  @IsOptional()
  @IsIn(['high', 'moderate', 'low'])
  severity?: ('high'|'moderate'|'low');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _severity?: Element;

  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the
   */
  @IsOptional()
  @IsIn(['registered', 'preliminary', 'final', 'amended', 'corrected', 'cancelled', 'entered-in-error', 'unknown'])
  status?: ('registered'|'preliminary'|'final'|'amended'|'corrected'|'cancelled'|'entered-in-error'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for DetectedIssue
   */
  constructor(source: Partial<DetectedIssue> = {}) {
    super(source);
    this.resourceType = 'DetectedIssue';
  }
}
