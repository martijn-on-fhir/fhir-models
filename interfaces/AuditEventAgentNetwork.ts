import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Logical network location for application activity, if the activity has a network location.
 */
export interface AuditEventAgentNetwork extends BackboneElement {

  /**
   * This could be a device id, IP address or some other identifier associated with a device.
   */
  address?: string | undefined;
  _address?: Element | undefined;
  /**
   * An identifier for the type of network access point that originated the audit event.
   */
  type?: string | undefined;
  _type?: Element | undefined;

}