import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Range } from './Range';

/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export interface SupplyRequestParameter extends BackboneElement {

  /**
   * A code or string that identifies the device detail being asserted.
   */
  code?: CodeableConcept | undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueCodeableConcept?: CodeableConcept | undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueRange?: Range | undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;

}