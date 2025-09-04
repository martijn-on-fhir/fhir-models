import 'reflect-metadata';
import { Quantity } from './Quantity';
import * as fhir from '../r4';

/**
 * A measured amount (or an amount that can potentially be measured).
 */
export class Count extends Quantity implements fhir.Count {
  /**
   * Constructor for Count
   */
  constructor(source: Partial<Count> = {}) {
    super(source);
  }
}