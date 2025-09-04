import { BackboneElement } from './BackboneElement';
import { TestReportSetupActionOperation } from './TestReportSetupActionOperation';

/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface TestReportTeardownAction extends BackboneElement {

  /**
   * An operation would involve a REST request to a server.
   */
  operation: TestReportSetupActionOperation;

}