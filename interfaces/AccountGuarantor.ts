import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * The parties responsible for balancing the account if other payment options fall short.
 */
export interface AccountGuarantor extends BackboneElement {

  /**
   * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
   */
  onHold?: boolean | undefined;
  _onHold?: Element | undefined;
  /**
   * The entity who is responsible.
   */
  party: Reference;
  /**
   * The timeframe during which the guarantor accepts responsibility for the account.
   */
  period?: Period | undefined;

}