import { BackboneElement } from './BackboneElement';
import { Duration } from './Duration';
import { Quantity } from './Quantity';

/**
 * The maximum number of units of the medication that can be dispensed in a period.
 */
export interface MedicationKnowledgeRegulatoryMaxDispense extends BackboneElement {

  /**
   * The period that applies to the maximum number of units.
   */
  period?: Duration | undefined;
  /**
   * The maximum number of units of the medication that can be dispensed.
   */
  quantity: Quantity;

}