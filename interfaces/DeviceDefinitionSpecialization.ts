import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export interface DeviceDefinitionSpecialization extends BackboneElement {

  /**
   * The standard that is used to operate and communicate.
   */
  systemType: string;
  _systemType?: Element | undefined;
  /**
   * The version of the standard that is used to operate and communicate.
   */
  version?: string | undefined;
  _version?: Element | undefined;

}