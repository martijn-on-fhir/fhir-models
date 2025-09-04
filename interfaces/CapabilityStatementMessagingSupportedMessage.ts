import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * This is a proposed alternative to the messaging.event structure.
 */
export interface CapabilityStatementMessagingSupportedMessage extends BackboneElement {

  /**
   * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
   */
  definition: string;
  _definition?: Element | undefined;
  /**
   * The mode of this event declaration - whether application is sender or receiver.
   */
  mode: ('sender'|'receiver');
  _mode?: Element | undefined;

}