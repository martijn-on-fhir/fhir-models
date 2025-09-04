import 'reflect-metadata';
import { Quantity } from './Quantity';
import * as fhir from '../r4';

/**
 * A length - a value with a unit that is a physical distance.
 */
export class Distance extends Quantity implements fhir.Distance {
  /**
   * Constructor for Distance
   */
  constructor(source: Partial<Distance> = {}) {
    super(source);
  }
}