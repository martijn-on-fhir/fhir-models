import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DiagnosticReportMedia } from '../backbone/DiagnosticReportMedia';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DiagnosticReport extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'DiagnosticReport' as const;

  /**
   * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be rep
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the categ
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * A code or name that describes this diagnostic report.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
   */
  @IsOptional()
  @IsString()
  conclusion?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _conclusion?: Element;

  /**
   * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  conclusionCode?: CodeableConcept[];

  /**
   * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the
   */
  @IsOptional()
  @IsString()
  effectiveDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _effectiveDateTime?: Element;

  /**
   * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Usually assigned by the Information System of the diagnostic service provider (filler id).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image eleme
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  imagingStudy?: Reference[];

  /**
   * May be different from the update time of the resource itself, because that is the status of the record (potentially a se
   */
  @IsOptional()
  @IsString()
  issued?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _issued?: Element;

  /**
   * A list of key images associated with this report. The images are generally created during the diagnostic process, and ma
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DiagnosticReportMedia)
  media?: DiagnosticReportMedia[];

  /**
   * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  performer?: Reference[];

  /**
   * "application/pdf" is recommended as the most reliable and interoperable in this context.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  presentedForm?: Attachment[];

  /**
   * Observations can contain observations.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  result?: Reference[];

  /**
   * Might not be the same entity that takes responsibility for the clinical report.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  resultsInterpreter?: Reference[];

  /**
   * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundan
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  specimen?: Reference[];

  /**
   * The status of the diagnostic report.
   */
  @IsOptional()
  @IsIn(['registered', 'partial', 'preliminary', 'final', 'amended', 'corrected', 'appended', 'cancelled', 'entered-in-error', 'unknown'])
  status?: ('registered'|'partial'|'preliminary'|'final'|'amended'|'corrected'|'appended'|'cancelled'|'entered-in-error'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyse
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Constructor for DiagnosticReport
   */
  constructor(source: Partial<DiagnosticReport> = {}) {
    super(source);
    this.resourceType = 'DiagnosticReport';
  }
}
