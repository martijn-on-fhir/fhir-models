import { BackboneElement } from './BackboneElement';
import { Duration } from './Duration';
import { Quantity } from './Quantity';

/**
 * If populating this element, either the quantity or the duration must be included.
 */
export interface MedicationRequestDispenseRequestInitialFill extends BackboneElement {

  /**
   * The length of time that the first dispense is expected to last.
   */
  duration?: Duration | undefined;
  /**
   * The amount or quantity to provide as part of the first dispense.
   */
  quantity?: Quantity | undefined;

}