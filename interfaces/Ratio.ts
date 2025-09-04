import { Element } from './Element';
import { Quantity } from './Quantity';

/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export interface Ratio extends Element {

  /**
   * The value of the denominator.
   */
  denominator?: Quantity | undefined;
  /**
   * The value of the numerator.
   */
  numerator?: Quantity | undefined;

}