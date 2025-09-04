import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { QuestionnaireItem } from '../backbone/QuestionnaireItem';
import { UsageContext } from '../elements/UsageContext';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Questionnaire extends DomainResource implements fhir.Questionnaire {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Questionnaire' as const;

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
   * An identifier for this question or group of questions in a particular terminology such as LOINC.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  code?: Coding[];

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restri
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
   * The URL of a Questionnaire that this Questionnaire is based on.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  derivedFrom?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _derivedFrom?: Element[];

  /**
   * This description can be used to capture details such as why the questionnaire was built, comments about misuse, instruct
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The effective period for a questionnaire  determines when the content is applicable for usage and is independent of publ
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /**
   * Allows filtering of questionnaires that are appropriate for use versus not.
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
   * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireItem)
  item?: QuestionnaireItem[];

  /**
   * It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally design
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
   * Usually an organization but may be an individual. The publisher (or steward) of the questionnaire is the organization or
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publisher?: Element;

  /**
   * This element does not describe the usage of the questionnaire. Instead, it provides traceability of ''why'' the resource
   */
  @IsOptional()
  @IsString()
  purpose?: string;

  /**
   * Constructor for Questionnaire
   */
  constructor(source: Partial<Questionnaire> = {}) {
    super(source);
    this.resourceType = 'Questionnaire';
  }
}
