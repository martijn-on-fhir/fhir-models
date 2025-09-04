import 'reflect-metadata';
import { Quantity } from './Quantity';

/**
 * A duration of time during which an organism (or a process) has existed.
 */
export class Age extends Quantity {
  /**
   * Constructor for Age
   */
  constructor(source: Partial<Age> = {}) {
    super(source);
  }
}