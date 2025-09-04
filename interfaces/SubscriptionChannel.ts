import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { URL } from './URL';

/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
export interface SubscriptionChannel extends BackboneElement {

  /**
   * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
   */
  endpoint?: string | undefined;
  _endpoint?: Element | undefined;
  /**
   * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
   */
  header?: string[] | undefined;
  _header?: Element[] | undefined;
  /**
   * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
   */
  payload?: string | undefined;
  _payload?: Element | undefined;
  /**
   * The type of channel to send notifications on.
   */
  type: ('rest-hook'|'websocket'|'email'|'sms'|'message');
  _type?: Element | undefined;

}