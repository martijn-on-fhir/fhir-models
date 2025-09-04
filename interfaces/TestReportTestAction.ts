import { BackboneElement } from './BackboneElement';
import { TestReportSetupActionAssert } from './TestReportSetupActionAssert';
import { TestReportSetupActionOperation } from './TestReportSetupActionOperation';

/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface TestReportTestAction extends BackboneElement {

  /**
   * The results of the assertion performed on the previous operations.
   */
  assert?: TestReportSetupActionAssert | undefined;
  /**
   * An operation would involve a REST request to a server.
   */
  operation?: TestReportSetupActionOperation | undefined;

}