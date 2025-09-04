import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Quantity } from './Quantity';

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export interface DeviceProperty extends BackboneElement {

  /**
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   */
  type: CodeableConcept;
  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  valueCode?: CodeableConcept[] | undefined;
  /**
   * Property value as a quantity.
   */
  valueQuantity?: Quantity[] | undefined;

}