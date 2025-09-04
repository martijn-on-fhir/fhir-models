import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Whether the $closure operation is supported.
 */
export interface TerminologyCapabilitiesClosure extends BackboneElement {

  /**
   * If cross-system closure is supported.
   */
  translation?: boolean | undefined;
  _translation?: Element | undefined;

}