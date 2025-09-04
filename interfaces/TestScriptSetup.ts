import { BackboneElement } from './BackboneElement';
import { TestScriptSetupAction } from './TestScriptSetupAction';

/**
 * A series of required setup operations before tests are executed.
 */
export interface TestScriptSetup extends BackboneElement {

  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: TestScriptSetupAction[];

}