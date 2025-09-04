import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Filter Properties supported.
 */
export interface TerminologyCapabilitiesCodeSystemVersionFilter extends BackboneElement {

  /**
   * Code of the property supported.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * Operations supported for the property.
   */
  op: string[];
  _op?: Element[] | undefined;

}