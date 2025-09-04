import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { DataRequirement } from '../elements/DataRequirement';
import { Identifier } from '../elements/Identifier';
import { ParameterDefinition } from '../elements/ParameterDefinition';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { RelatedArtifact } from '../elements/RelatedArtifact';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Library extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Library' as const;

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
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a b
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  content?: Attachment[];

  /**
   * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions
   */
  @IsOptional()
  @IsString()
  copyright?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _copyright?: Element;

  /**
   * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by th
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataRequirement)
  dataRequirement?: DataRequirement[];

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
   * This description can be used to capture details such as why the library was built, comments about misuse, instructions f
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
   * The effective period for a library  determines when the content is applicable for usage and is independent of publicatio
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
   * Allows filtering of librarys that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or 
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
   * The parameter element defines parameters used by the library.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParameterDefinition)
  parameter?: ParameterDefinition[];

  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the library is the organization or indiv
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  /**
   * Constructor for Library
   */
  constructor(source: Partial<Library> = {}) {
    super(source);
    this.resourceType = 'Library';
  }
}
