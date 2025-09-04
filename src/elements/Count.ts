import 'reflect-metadata';
import { Quantity } from './Quantity';

/**
 * A measured amount (or an amount that can potentially be measured).
 */
export class Count extends Quantity {
  /**
   * Constructor for Count
   */
  constructor(source: Partial<Count> = {}) {
    super(source);
  }
}