import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CapabilityStatementDocument } from '../backbone/CapabilityStatementDocument';
import { CapabilityStatementImplementation } from '../backbone/CapabilityStatementImplementation';
import { CapabilityStatementMessaging } from '../backbone/CapabilityStatementMessaging';
import { CapabilityStatementRest } from '../backbone/CapabilityStatementRest';
import { CapabilityStatementSoftware } from '../backbone/CapabilityStatementSoftware';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatement extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'CapabilityStatement' as const;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal
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
   * This description can be used to capture details such as why the capability statement was built, comments about misuse, i
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * A document definition.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementDocument)
  document?: CapabilityStatementDocument[];

  /**
   * Allows filtering of capability statements that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Servers may implement multiple versions (see [Managing Multiple Versions](versioning.html), and the [$versions](capabili
   */
  @IsOptional()
  @IsString()
  fhirVersion?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _fhirVersion?: Element;

  /**
   * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appro
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  format?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _format?: Element[];

  /**
   * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installa
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CapabilityStatementImplementation)
  implementation?: CapabilityStatementImplementation;

  /**
   * A list of implementation guides that the server does (or should) support in their entirety.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  implementationGuide?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _implementationGuide?: Element[];

  /**
   * the contents of any directly or indirectly imported CapabilityStatements SHALL NOT overlap, i.e. they cannot refer to th
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imports?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _imports?: Element[];

  /**
   * HL7 defines the following Services: [Terminology Service](terminology-service.html). Many [Implementation Guides](http:/
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiates?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiates?: Element[];

  /**
   * It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally
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
   * Multiple repetitions allow the documentation of multiple endpoints per solution.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementMessaging)
  messaging?: CapabilityStatementMessaging[];

  /**
   * Constructor for CapabilityStatement
   */
  constructor(source: Partial<CapabilityStatement> = {}) {
    super(source);
    this.resourceType = 'CapabilityStatement';
  }
}
