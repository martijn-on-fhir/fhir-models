import 'reflect-metadata';
import { Quantity } from './Quantity';
import * as fhir from '../r4';

/**
 * A duration of time during which an organism (or a process) has existed.
 */
export class Age extends Quantity implements fhir.Age {
  /**
   * Constructor for Age
   */
  constructor(source: Partial<Age> = {}) {
    super(source);
  }
}