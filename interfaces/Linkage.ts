import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { LinkageItem } from './LinkageItem';
import { Reference } from './Reference';

/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
export interface Linkage extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Linkage';
  /**
   * If false, any asserted linkages should not be considered current/relevant/applicable.
   */
  active?: boolean | undefined;
  _active?: Element | undefined;
  /**
   * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
   */
  author?: Reference | undefined;
  /**
   * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
   */
  item: LinkageItem[];

}