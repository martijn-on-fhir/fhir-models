import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export interface CapabilityStatementImplementation extends BackboneElement {

  /**
   * The organization responsible for the management of the instance and oversight of the data on the server at the specified URL.
   */
  custodian?: Reference | undefined;
  /**
   * Information about the specific installation that this capability statement relates to.
   */
  description: string;
  _description?: Element | undefined;
  /**
   * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
   */
  url?: string | undefined;
  _url?: Element | undefined;

}