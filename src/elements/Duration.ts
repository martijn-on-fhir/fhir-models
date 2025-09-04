import 'reflect-metadata';
import { Quantity } from './Quantity';

/**
 * A length of time.
 */
export class Duration extends Quantity {
  /**
   * Constructor for Duration
   */
  constructor(source: Partial<Duration> = {}) {
    super(source);
  }
}