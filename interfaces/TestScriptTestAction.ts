import { BackboneElement } from './BackboneElement';
import { TestScriptSetupActionAssert } from './TestScriptSetupActionAssert';
import { TestScriptSetupActionOperation } from './TestScriptSetupActionOperation';

/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface TestScriptTestAction extends BackboneElement {

  /**
   * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
   */
  assert?: TestScriptSetupActionAssert | undefined;
  /**
   * An operation would involve a REST request to a server.
   */
  operation?: TestScriptSetupActionOperation | undefined;

}