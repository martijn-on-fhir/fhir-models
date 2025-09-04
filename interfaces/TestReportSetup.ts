import { BackboneElement } from './BackboneElement';
import { TestReportSetupAction } from './TestReportSetupAction';

/**
 * The results of the series of required setup operations before the tests were executed.
 */
export interface TestReportSetup extends BackboneElement {

  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: TestReportSetupAction[];

}