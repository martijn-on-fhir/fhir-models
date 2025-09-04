import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';

/**
 * An endpoint (network accessible address) to which messages and/or replies are to be sent.
 */
export interface CapabilityStatementMessagingEndpoint extends BackboneElement {

  /**
   * The network address of the endpoint. For solutions that do not use network addresses for routing, it can be just an identifier.
   */
  address: string;
  _address?: Element | undefined;
  /**
   * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
   */
  protocol: Coding;

}