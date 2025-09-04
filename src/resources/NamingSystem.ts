import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { NamingSystemUniqueId } from '../backbone/NamingSystemUniqueId';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class NamingSystem extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'NamingSystem' as const;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

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
   * This description can be used to capture details such as why the naming system was built, comments about misuse, instruct
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * It may be possible for the naming system to be used in jurisdictions other than those for which it was originally design
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * Indicates the purpose for the naming system - what kinds of things does it make unique?
   */
  @IsOptional()
  @IsIn(['codesystem', 'identifier', 'root'])
  kind?: ('codesystem'|'identifier'|'root');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _kind?: Element;

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
   * Usually an organization but may be an individual. The publisher (or steward) of the naming system is the organization or
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publisher?: Element;

  /**
   * This is the primary organization.  Responsibility for some aspects of a namespace may be delegated.
   */
  @IsOptional()
  @IsString()
  responsible?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _responsible?: Element;

  /**
   * Allows filtering of naming systems that are appropriate for use versus not.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'retired', 'unknown'])
  status?: ('draft'|'active'|'retired'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * This will most commonly be used for identifier namespaces, but categories could potentially be useful for code systems a
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication t
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NamingSystemUniqueId)
  uniqueId?: NamingSystemUniqueId[];

  /**
   * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower c
   */
  @IsOptional()
  @IsString()
  usage?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _usage?: Element;

  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /**
   * Constructor for NamingSystem
   */
  constructor(source: Partial<NamingSystem> = {}) {
    super(source);
    this.resourceType = 'NamingSystem';
  }
}
