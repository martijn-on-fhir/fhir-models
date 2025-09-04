import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Identifier } from './Identifier';

/**
 * The actual design of the device or software version running on the device.
 */
export interface DeviceVersion extends BackboneElement {

  /**
   * A single component of the device version.
   */
  component?: Identifier | undefined;
  /**
   * The type of the device version.
   */
  type?: CodeableConcept | undefined;
  /**
   * The version text.
   */
  value: string;
  _value?: Element | undefined;

}