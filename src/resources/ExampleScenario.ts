import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { ExampleScenarioActor } from '../backbone/ExampleScenarioActor';
import { ExampleScenarioInstance } from '../backbone/ExampleScenarioInstance';
import { ExampleScenarioProcess } from '../backbone/ExampleScenarioProcess';
import { Identifier } from '../elements/Identifier';
import { UsageContext } from '../elements/UsageContext';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExampleScenario extends DomainResource implements fhir.ExampleScenario {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ExampleScenario' as const;

  /**
   * Actor participating in the resource.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioActor)
  actor?: ExampleScenarioActor[];

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
   * Allows filtering of example scenarios that are appropriate for use versus not.
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
   * Each resource and each version that is present in the workflow.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioInstance)
  instance?: ExampleScenarioInstance[];

  /**
   * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally des
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
   * Each major process - a group of operations.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleScenarioProcess)
  process?: ExampleScenarioProcess[];

  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publisher?: Element;

  /**
   * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resou
   */
  @IsOptional()
  @IsString()
  purpose?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _purpose?: Element;

  /**
   * Allows filtering of example scenarios that are appropriate for use versus not.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'retired', 'unknown'])
  status?: ('draft'|'active'|'retired'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if t
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /**
   * There may be different example scenario instances that have the same identifier but different versions.  The version can
   */
  @IsOptional()
  @IsString()
  version?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _version?: Element;

  /**
   * Constructor for ExampleScenario
   */
  constructor(source: Partial<ExampleScenario> = {}) {
    super(source);
    this.resourceType = 'ExampleScenario';
  }
}
