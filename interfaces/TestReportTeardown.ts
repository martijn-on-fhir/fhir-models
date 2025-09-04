import { BackboneElement } from './BackboneElement';
import { TestReportTeardownAction } from './TestReportTeardownAction';

/**
 * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 */
export interface TestReportTeardown extends BackboneElement {

  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: TestReportTeardownAction[];

}