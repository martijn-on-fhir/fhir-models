import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { TestScriptTestAction } from './TestScriptTestAction';

/**
 * A test in this script.
 */
export interface TestScriptTest extends BackboneElement {

  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: TestScriptTestAction[];
  /**
   * A short description of the test used by test engines for tracking and reporting purposes.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The name of this test used for tracking/logging purposes by test engines.
   */
  name?: string | undefined;
  _name?: Element | undefined;

}