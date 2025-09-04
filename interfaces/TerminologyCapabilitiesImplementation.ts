import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export interface TerminologyCapabilitiesImplementation extends BackboneElement {

  /**
   * Information about the specific installation that this terminology capability statement relates to.
   */
  description: string;
  _description?: Element | undefined;
  /**
   * An absolute base URL for the implementation.
   */
  url?: string | undefined;
  _url?: Element | undefined;

}