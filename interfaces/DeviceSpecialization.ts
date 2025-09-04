import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export interface DeviceSpecialization extends BackboneElement {

  /**
   * The standard that is used to operate and communicate.
   */
  systemType: CodeableConcept;
  /**
   * The version of the standard that is used to operate and communicate.
   */
  version?: string | undefined;
  _version?: Element | undefined;

}