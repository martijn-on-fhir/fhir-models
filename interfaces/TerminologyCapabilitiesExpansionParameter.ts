import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Supported expansion parameter.
 */
export interface TerminologyCapabilitiesExpansionParameter extends BackboneElement {

  /**
   * Description of support for parameter.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * Expansion Parameter name.
   */
  name: string;
  _name?: Element | undefined;

}