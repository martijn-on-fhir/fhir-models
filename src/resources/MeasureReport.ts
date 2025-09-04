import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MeasureReportGroup } from '../backbone/MeasureReportGroup';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MeasureReport extends DomainResource implements fhir.MeasureReport {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MeasureReport' as const;

  /**
   * The date this measure report was generated.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  evaluatedResource?: Reference[];

  /**
   * The results of the calculation, one for each population group in the measure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroup)
  group?: MeasureReportGroup[];

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. Th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  improvementNotation?: CodeableConcept;

  /**
   * A reference to the Measure that was calculated to produce this report.
   */
  @IsOptional()
  @IsString()
  measure?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _measure?: Element;

  /**
   * The reporting period for which the report was calculated.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * The individual, location, or organization that is reporting the data.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reporter?: Reference;

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['complete', 'pending', 'error'])
  status?: ('complete'|'pending'|'error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Optional subject identifying the individual or individuals the report is for.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all
   */
  @IsOptional()
  @IsIn(['individual', 'subject-list', 'summary', 'data-collection'])
  type?: ('individual'|'subject-list'|'summary'|'data-collection');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for MeasureReport
   */
  constructor(source: Partial<MeasureReport> = {}) {
    super(source);
    this.resourceType = 'MeasureReport';
  }
}
