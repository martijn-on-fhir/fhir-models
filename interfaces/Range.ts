import { Element } from './Element';
import { Quantity } from './Quantity';

/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export interface Range extends Element {

  /**
   * If the high element is missing, the high boundary is not known.
   */
  high?: Quantity | undefined;
  /**
   * If the low element is missing, the low boundary is not known.
   */
  low?: Quantity | undefined;

}