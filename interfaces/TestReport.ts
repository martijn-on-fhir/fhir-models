import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';
import { TestReportParticipant } from './TestReportParticipant';
import { TestReportSetup } from './TestReportSetup';
import { TestReportTeardown } from './TestReportTeardown';
import { TestReportTest } from './TestReportTest';

/**
 * A summary of information based on the results of executing a TestScript.
 */
export interface TestReport extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'TestReport';
  /**
   * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
   */
  identifier?: Identifier | undefined;
  /**
   * Additional specific dates may be added as extensions.
   */
  issued?: string | undefined;
  _issued?: Element | undefined;
  /**
   * Not expected to be globally unique.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * A participant in the test execution, either the execution engine, a client, or a server.
   */
  participant?: TestReportParticipant[] | undefined;
  /**
   * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
   */
  result: ('pass'|'fail'|'pending');
  _result?: Element | undefined;
  /**
   * The final score (percentage of tests passed) resulting from the execution of the TestScript.
   */
  score?: number | undefined;
  /**
   * The results of the series of required setup operations before the tests were executed.
   */
  setup?: TestReportSetup | undefined;
  /**
   * The status represents where the execution is currently within the test script execution life cycle.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('completed'|'in-progress'|'waiting'|'stopped'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
   */
  teardown?: TestReportTeardown | undefined;
  /**
   * A test executed from the test script.
   */
  test?: TestReportTest[] | undefined;
  /**
   * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
   */
  tester?: string | undefined;
  _tester?: Element | undefined;
  /**
   * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
   */
  testScript: Reference;

}