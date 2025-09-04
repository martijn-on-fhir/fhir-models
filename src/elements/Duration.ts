import 'reflect-metadata';
import { Quantity } from './Quantity';
import * as fhir from '../r4';

/**
 * A length of time.
 */
export class Duration extends Quantity implements fhir.Duration {
  /**
   * Constructor for Duration
   */
  constructor(source: Partial<Duration> = {}) {
    super(source);
  }
}