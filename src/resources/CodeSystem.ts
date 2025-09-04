import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeSystemConcept } from '../backbone/CodeSystemConcept';
import { CodeSystemFilter } from '../backbone/CodeSystemFilter';
import { CodeSystemProperty } from '../backbone/CodeSystemProperty';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CodeSystem extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'CodeSystem' as const;

  /**
   * If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not 
   */
  @IsOptional()
  @IsBoolean()
  caseSensitive?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _caseSensitive?: Element;

  /**
   * Note that the code system resource does not define what the compositional grammar is, only whether or not there is one.
   */
  @IsOptional()
  @IsBoolean()
  compositional?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _compositional?: Element;

  /**
   * If this is empty, it means that the code system resource does not represent the content of the code system.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemConcept)
  concept?: CodeSystemConcept[];

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instan
   */
  @IsOptional()
  @IsIn(['not-present', 'example', 'fragment', 'complete', 'supplement'])
  content?: ('not-present'|'example'|'fragment'|'complete'|'supplement');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _content?: Element;

  /**
   * ... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement sh
   */
  @IsOptional()
  @IsString()
  copyright?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _copyright?: Element;

  /**
   * The count of concepts defined in this resource cannot be more than this value but may be less for several reasons - see 
   */
  @IsOptional()
  @IsNumber()
  count?: number;

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
   * This description can be used to capture details such as why the code system was built, comments about misuse, instructio
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Allows filtering of code systems that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Note that filters defined in code systems usually require custom code on the part of any terminology engine that will ma
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemFilter)
  filter?: CodeSystemFilter[];

  /**
   * Note that other representations might have a different hierarchy or none at all, and represent the information using pro
   */
  @IsOptional()
  @IsIn(['grouped-by', 'is-a', 'part-of', 'classified-with'])
  hierarchyMeaning?: ('grouped-by'|'is-a'|'part-of'|'classified-with');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _hierarchyMeaning?: Element;

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * It may be possible for the code system to be used in jurisdictions other than those for which it was originally designed
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

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
   * A property defines an additional slot through which additional information can be provided about a concept.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeSystemProperty)
  property?: CodeSystemProperty[];

  /**
   * Constructor for CodeSystem
   */
  constructor(source: Partial<CodeSystem> = {}) {
    super(source);
    this.resourceType = 'CodeSystem';
  }
}
