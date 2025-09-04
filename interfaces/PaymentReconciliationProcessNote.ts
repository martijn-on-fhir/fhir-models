import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * A note that describes or explains the processing in a human readable form.
 */
export interface PaymentReconciliationProcessNote extends BackboneElement {

  /**
   * The explanation or description associated with the processing.
   */
  text?: string | undefined;
  _text?: Element | undefined;
  /**
   * The business purpose of the note text.
   */
  type?: ('display'|'print'|'printoper') | undefined;
  _type?: Element | undefined;

}