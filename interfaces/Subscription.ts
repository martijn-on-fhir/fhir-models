import { ContactPoint } from './ContactPoint';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { SubscriptionChannel } from './SubscriptionChannel';

/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 */
export interface Subscription extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Subscription';
  /**
   * Details where to send notifications when resources are received that meet the criteria.
   */
  channel: SubscriptionChannel;
  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  contact?: ContactPoint[] | undefined;
  /**
   * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
   */
  criteria: string;
  _criteria?: Element | undefined;
  /**
   * The server is permitted to deviate from this time but should observe it.
   */
  end?: string | undefined;
  _end?: Element | undefined;
  /**
   * A record of the last error that occurred when the server processed a notification.
   */
  error?: string | undefined;
  _error?: Element | undefined;
  /**
   * A description of why this subscription is defined.
   */
  reason: string;
  _reason?: Element | undefined;
  /**
   * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('requested'|'active'|'error'|'off');
  _status?: Element | undefined;

}