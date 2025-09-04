import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * A specification of restful operations supported by the system.
 */
export interface CapabilityStatementRestInteraction extends BackboneElement {

  /**
   * A coded identifier of the operation, supported by the system.
   */
  code: ('transaction'|'batch'|'search-system'|'history-system');
  _code?: Element | undefined;
  /**
   * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;

}