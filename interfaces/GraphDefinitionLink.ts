import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { GraphDefinitionLinkTarget } from './GraphDefinitionLinkTarget';

/**
 * Links this graph makes rules about.
 */
export interface GraphDefinitionLink extends BackboneElement {

  /**
   * Information about why this link is of interest in this graph definition.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Maximum occurrences for this link.
   */
  max?: string | undefined;
  _max?: Element | undefined;
  /**
   * Minimum occurrences for this link.
   */
  min?: number | undefined;
  /**
   * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
   */
  path?: string | undefined;
  _path?: Element | undefined;
  /**
   * Which slice (if profiled).
   */
  sliceName?: string | undefined;
  _sliceName?: Element | undefined;
  /**
   * Potential target for the link.
   */
  target?: GraphDefinitionLinkTarget[] | undefined;

}