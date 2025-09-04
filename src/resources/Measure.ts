import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { MeasureGroup } from '../backbone/MeasureGroup';
import { MeasureSupplementalData } from '../backbone/MeasureSupplementalData';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { RelatedArtifact } from '../elements/RelatedArtifact';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Measure extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Measure' as const;

  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  @IsOptional()
  @IsString()
  approvalDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _approvalDate?: Element;

  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  author?: ContactDetail[];

  /**
   * Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure.
   */
  @IsOptional()
  @IsString()
  clinicalRecommendationStatement?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _clinicalRecommendationStatement?: Element;

  /**
   * If this is a composite measure, the scoring method used to combine the component measures to determine the composite sco
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  compositeScoring?: CodeableConcept;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions
   */
  @IsOptional()
  @IsString()
  copyright?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _copyright?: Element;

  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation 
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * Provides a description of an individual term used within the measure.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  definition?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _definition?: Element[];

  /**
   * This description can be used to capture details such as why the measure was built, comments about misuse, instructions f
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Notices and disclaimers regarding the use of the measure or related to intellectual property (such as code systems) refe
   */
  @IsOptional()
  @IsString()
  disclaimer?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _disclaimer?: Element;

  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  editor?: ContactDetail[];

  /**
   * The effective period for a measure  determines when the content is applicable for usage and is independent of publicatio
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  endorser?: ContactDetail[];

  /**
   * Allows filtering of measures that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * A group of population criteria for the measure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureGroup)
  group?: MeasureGroup[];

  /**
   * Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure.
   */
  @IsOptional()
  @IsString()
  guidance?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _guidance?: Element;

  /**
   * Constructor for Measure
   */
  constructor(source: Partial<Measure> = {}) {
    super(source);
    this.resourceType = 'Measure';
  }
}
