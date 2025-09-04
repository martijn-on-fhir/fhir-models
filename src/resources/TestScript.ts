import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { TestScriptDestination } from '../backbone/TestScriptDestination';
import { TestScriptFixture } from '../backbone/TestScriptFixture';
import { TestScriptMetadata } from '../backbone/TestScriptMetadata';
import { TestScriptOrigin } from '../backbone/TestScriptOrigin';
import { TestScriptSetup } from '../backbone/TestScriptSetup';
import { TestScriptTeardown } from '../backbone/TestScriptTeardown';
import { TestScriptTest } from '../backbone/TestScriptTest';
import { TestScriptVariable } from '../backbone/TestScriptVariable';
import { UsageContext } from '../elements/UsageContext';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScript extends DomainResource implements fhir.TestScript {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'TestScript' as const;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrict
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
   * This description can be used to capture details such as why the test script was built, comments about misuse, instructio
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engine
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptDestination)
  destination?: TestScriptDestination[];

  /**
   * Allows filtering of test scripts that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptFixture)
  fixture?: TestScriptFixture[];

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * It may be possible for the test script to be used in jurisdictions other than those for which it was originally designed
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptMetadata)
  metadata?: TestScriptMetadata;

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
   * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines co
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptOrigin)
  origin?: TestScriptOrigin[];

  /**
   * See http://build.fhir.org/resourcelist.html for complete list of resource types.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  profile?: Reference[];

  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the test script is the organization or i
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publisher?: Element;

  /**
   * This element does not describe the usage of the test script. Instead, it provides traceability of ''why'' the resource i
   */
  @IsOptional()
  @IsString()
  purpose?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _purpose?: Element;

  /**
   * A series of required setup operations before tests are executed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptSetup)
  setup?: TestScriptSetup;

  /**
   * Allows filtering of test scripts that are appropriate for use versus not.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'retired', 'unknown'])
  status?: ('draft'|'active'|'retired'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for TestScript
   */
  constructor(source: Partial<TestScript> = {}) {
    super(source);
    this.resourceType = 'TestScript';
  }
}
