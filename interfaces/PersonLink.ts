import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Link to a resource that concerns the same actual person.
 */
export interface PersonLink extends BackboneElement {

  /**
   * Level of assurance that this link is associated with the target resource.
   */
  assurance?: ('level1'|'level2'|'level3'|'level4') | undefined;
  _assurance?: Element | undefined;
  /**
   * The resource to which this actual person is associated.
   */
  target: Reference;

}