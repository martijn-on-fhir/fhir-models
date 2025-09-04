import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * The operation performed.
 */
export interface TestReportSetupActionOperation extends BackboneElement {

  /**
   * A link to further details on the result.
   */
  detail?: string | undefined;
  _detail?: Element | undefined;
  /**
   * An explanatory message associated with the result.
   */
  message?: string | undefined;
  _message?: Element | undefined;
  /**
   * The result of this operation.
   */
  result: ('pass'|'skip'|'fail'|'warning'|'error');
  _result?: Element | undefined;

}