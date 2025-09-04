import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * The item that is being delivered or has been supplied.
 */
export interface SupplyDeliverySuppliedItem extends BackboneElement {

  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemCodeableConcept?: CodeableConcept | undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemReference?: Reference | undefined;
  /**
   * The amount of supply that has been dispensed. Includes unit of measure.
   */
  quantity?: Quantity | undefined;

}