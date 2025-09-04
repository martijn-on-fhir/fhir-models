import 'reflect-metadata';
import { Quantity } from './Quantity';

/**
 * A length - a value with a unit that is a physical distance.
 */
export class Distance extends Quantity {
  /**
   * Constructor for Distance
   */
  constructor(source: Partial<Distance> = {}) {
    super(source);
  }
}