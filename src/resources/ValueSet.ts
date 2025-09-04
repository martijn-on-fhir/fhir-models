import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { UsageContext } from '../elements/UsageContext';
import { ValueSetCompose } from '../backbone/ValueSetCompose';
import { ValueSetExpansion } from '../backbone/ValueSetExpansion';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ValueSet extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ValueSet' as const;

  /**
   * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ValueSetCompose)
  compose?: ValueSetCompose;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement sho
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
   * This description can be used to capture details such as why the value set was built, comments about misuse, instructions
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set ex
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ValueSetExpansion)
  expansion?: ValueSetExpansion;

  /**
   * Allows filtering of value sets that are appropriate for use versus not.
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
   * Normally immutability is set to 'false', which is the default assumption if it is not populated.  Note that the implicat
   */
  @IsOptional()
  @IsBoolean()
  immutable?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _immutable?: Element;

  /**
   * It may be possible for the value set to be used in jurisdictions other than those for which it was originally designed o
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
   * Usually an organization but may be an individual. The publisher (or steward) of the value set is the organization or ind
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publisher?: Element;

  /**
   * This element does not describe the usage of the value set. Instead, it provides traceability of ''why'' the resource is 
   */
  @IsOptional()
  @IsString()
  purpose?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _purpose?: Element;

  /**
   * Allows filtering of value sets that are appropriate for use versus not.See also the [valueset-workflowStatus](extension-
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'retired', 'unknown'])
  status?: ('draft'|'active'|'retired'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * Constructor for ValueSet
   */
  constructor(source: Partial<ValueSet> = {}) {
    super(source);
    this.resourceType = 'ValueSet';
  }
}
