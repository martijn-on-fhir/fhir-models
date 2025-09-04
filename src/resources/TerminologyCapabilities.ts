import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { TerminologyCapabilitiesClosure } from '../backbone/TerminologyCapabilitiesClosure';
import { TerminologyCapabilitiesCodeSystem } from '../backbone/TerminologyCapabilitiesCodeSystem';
import { TerminologyCapabilitiesExpansion } from '../backbone/TerminologyCapabilitiesExpansion';
import { TerminologyCapabilitiesImplementation } from '../backbone/TerminologyCapabilitiesImplementation';
import { TerminologyCapabilitiesSoftware } from '../backbone/TerminologyCapabilitiesSoftware';
import { TerminologyCapabilitiesTranslation } from '../backbone/TerminologyCapabilitiesTranslation';
import { TerminologyCapabilitiesValidateCode } from '../backbone/TerminologyCapabilitiesValidateCode';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilities extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'TerminologyCapabilities' as const;

  /**
   * Whether the $closure operation is supported.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TerminologyCapabilitiesClosure)
  closure?: TerminologyCapabilitiesClosure;

  /**
   * See notes on the [ValueSet](valueset.html#) resource.
   */
  @IsOptional()
  @IsIn(['explicit', 'all'])
  codeSearch?: ('explicit'|'all');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _codeSearch?: Element;

  /**
   * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSyste
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TerminologyCapabilitiesCodeSystem)
  codeSystem?: TerminologyCapabilitiesCodeSystem[];

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally l
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
   * This description can be used to capture details such as why the terminology capabilities was built, comments about misus
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TerminologyCapabilitiesExpansion)
  expansion?: TerminologyCapabilitiesExpansion;

  /**
   * Allows filtering of terminology capabilitiess that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particu
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TerminologyCapabilitiesImplementation)
  implementation?: TerminologyCapabilitiesImplementation;

  /**
   * It may be possible for the terminology capabilities to be used in jurisdictions other than those for which it was origin
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * The way that this statement is intended to be used, to describe an actual running instance of software, a particular pro
   */
  @IsOptional()
  @IsIn(['instance', 'capability', 'requirements'])
  kind?: ('instance'|'capability'|'requirements');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _kind?: Element;

  /**
   * Whether the server supports lockedDate.
   */
  @IsOptional()
  @IsBoolean()
  lockedDate?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lockedDate?: Element;

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
   * Usually an organization but may be an individual. The publisher (or steward) of the terminology capabilities is the orga
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publisher?: Element;

  /**
   * This element does not describe the usage of the terminology capabilities. Instead, it provides traceability of ''why'' t
   */
  @IsOptional()
  @IsString()
  purpose?: string;

  /**
   * Constructor for TerminologyCapabilities
   */
  constructor(source: Partial<TerminologyCapabilities> = {}) {
    super(source);
    this.resourceType = 'TerminologyCapabilities';
  }
}
