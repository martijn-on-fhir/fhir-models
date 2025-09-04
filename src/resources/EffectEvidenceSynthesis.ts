import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { EffectEvidenceSynthesisCertainty } from '../backbone/EffectEvidenceSynthesisCertainty';
import { EffectEvidenceSynthesisEffectEstimate } from '../backbone/EffectEvidenceSynthesisEffectEstimate';
import { EffectEvidenceSynthesisResultsByExposure } from '../backbone/EffectEvidenceSynthesisResultsByExposure';
import { EffectEvidenceSynthesisSampleSize } from '../backbone/EffectEvidenceSynthesisSampleSize';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { RelatedArtifact } from '../elements/RelatedArtifact';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EffectEvidenceSynthesis extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'EffectEvidenceSynthesis' as const;

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
   * A description of the certainty of the effect estimate.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EffectEvidenceSynthesisCertainty)
  certainty?: EffectEvidenceSynthesisCertainty[];

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally 
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
   * This description can be used to capture details such as why the effect evidence synthesis was built, comments about misu
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  editor?: ContactDetail[];

  /**
   * The estimated effect of the exposure variant.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EffectEvidenceSynthesisEffectEstimate)
  effectEstimate?: EffectEvidenceSynthesisEffectEstimate[];

  /**
   * The effective period for a effect evidence synthesis  determines when the content is applicable for usage and is indepen
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
   * A reference to a EvidenceVariable resource that defines the exposure for the research.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  exposure?: Reference;

  /**
   * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  exposureAlternative?: Reference;

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * It may be possible for the effect evidence synthesis to be used in jurisdictions other than those for which it was origi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * If specified, this date follows the original approval date.
   */
  @IsOptional()
  @IsString()
  lastReviewDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lastReviewDate?: Element;

  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is 
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * A reference to a EvidenceVariable resomece that defines the outcome for the research.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  outcome?: Reference;

  /**
   * Constructor for EffectEvidenceSynthesis
   */
  constructor(source: Partial<EffectEvidenceSynthesis> = {}) {
    super(source);
    this.resourceType = 'EffectEvidenceSynthesis';
  }
}
