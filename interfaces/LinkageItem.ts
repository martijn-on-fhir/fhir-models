import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
 */
export interface LinkageItem extends BackboneElement {

  /**
   * The resource instance being linked as part of the group.
   */
  resource: Reference;
  /**
   * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
   */
  type: ('source'|'alternate'|'historical');
  _type?: Element | undefined;

}