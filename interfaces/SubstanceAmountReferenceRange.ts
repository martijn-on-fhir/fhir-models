import { Element } from './Element';
import { Quantity } from './Quantity';

/**
 * Reference range of possible or expected values.
 */
export interface SubstanceAmountReferenceRange extends Element {

  /**
   * Upper limit possible or expected.
   */
  highLimit?: Quantity | undefined;
  /**
   * Lower limit possible or expected.
   */
  lowLimit?: Quantity | undefined;

}