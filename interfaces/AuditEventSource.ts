import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
 */
export interface AuditEventSource extends BackboneElement {

  /**
   * Identifier of the source where the event was detected.
   */
  observer: Reference;
  /**
   * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
   */
  site?: string | undefined;
  _site?: Element | undefined;
  /**
   * Code specifying the type of source where event originated.
   */
  type?: Coding[] | undefined;

}