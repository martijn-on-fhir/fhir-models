import { BackboneElement } from './BackboneElement';
import { ConceptMapGroupElementTarget } from './ConceptMapGroupElementTarget';
import { Element } from './Element';

/**
 * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
 */
export interface ConceptMapGroupElement extends BackboneElement {

  /**
   * Identity (code or path) or the element/item being mapped.
   */
  code?: string | undefined;
  _code?: Element | undefined;
  /**
   * The display is ignored when processing the map.
   */
  display?: string | undefined;
  _display?: Element | undefined;
  /**
   * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
   */
  target?: ConceptMapGroupElementTarget[] | undefined;

}