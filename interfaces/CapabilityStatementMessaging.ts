import { BackboneElement } from './BackboneElement';
import { CapabilityStatementMessagingEndpoint } from './CapabilityStatementMessagingEndpoint';
import { CapabilityStatementMessagingSupportedMessage } from './CapabilityStatementMessagingSupportedMessage';
import { Element } from './Element';

/**
 * Multiple repetitions allow the documentation of multiple endpoints per solution.
 */
export interface CapabilityStatementMessaging extends BackboneElement {

  /**
   * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * An endpoint (network accessible address) to which messages and/or replies are to be sent.
   */
  endpoint?: CapabilityStatementMessagingEndpoint[] | undefined;
  /**
   * If this value is missing then the application does not implement (receiver) or depend on (sender) reliable messaging.
   */
  reliableCache?: number | undefined;
  /**
   * This is a proposed alternative to the messaging.event structure.
   */
  supportedMessage?: CapabilityStatementMessagingSupportedMessage[] | undefined;

}