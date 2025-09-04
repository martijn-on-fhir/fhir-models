import { BackboneElement } from './BackboneElement';
import { TestScriptTeardownAction } from './TestScriptTeardownAction';

/**
 * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
 */
export interface TestScriptTeardown extends BackboneElement {

  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: TestScriptTeardownAction[];

}