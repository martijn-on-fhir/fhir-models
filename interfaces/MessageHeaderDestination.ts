import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export interface MessageHeaderDestination extends BackboneElement {

  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  endpoint: string;
  _endpoint?: Element | undefined;
  /**
   * Human-readable name for the target system.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
   */
  receiver?: Reference | undefined;
  /**
   * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   */
  target?: Reference | undefined;

}