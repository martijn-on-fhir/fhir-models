import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { TestReportParticipant } from '../backbone/TestReportParticipant';
import { TestReportSetup } from '../backbone/TestReportSetup';
import { TestReportTeardown } from '../backbone/TestReportTeardown';
import { TestReportTest } from '../backbone/TestReportTest';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestReport extends DomainResource implements fhir.TestReport {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'TestReport' as const;

  /**
   * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * Additional specific dates may be added as extensions.
   */
  @IsOptional()
  @IsString()
  issued?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _issued?: Element;

  /**
   * Not expected to be globally unique.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * A participant in the test execution, either the execution engine, a client, or a server.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestReportParticipant)
  participant?: TestReportParticipant[];

  /**
   * The pass and fail result represents a completed test script execution. The pending result represents a test script execu
   */
  @IsOptional()
  @IsIn(['pass', 'fail', 'pending'])
  result?: ('pass'|'fail'|'pending');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _result?: Element;

  /**
   * The final score (percentage of tests passed) resulting from the execution of the TestScript.
   */
  @IsOptional()
  @IsNumber()
  score?: number;

  /**
   * The results of the series of required setup operations before the tests were executed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetup)
  setup?: TestReportSetup;

  /**
   * The status represents where the execution is currently within the test script execution life cycle. This element is labe
   */
  @IsOptional()
  @IsIn(['completed', 'in-progress', 'waiting', 'stopped', 'entered-in-error'])
  status?: ('completed'|'in-progress'|'waiting'|'stopped'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwis
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportTeardown)
  teardown?: TestReportTeardown;

  /**
   * A test executed from the test script.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestReportTest)
  test?: TestReportTest[];

  /**
   * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available fro
   */
  @IsOptional()
  @IsString()
  tester?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _tester?: Element;

  /**
   * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  testScript?: Reference;

  /**
   * Constructor for TestReport
   */
  constructor(source: Partial<TestReport> = {}) {
    super(source);
    this.resourceType = 'TestReport';
  }
}
