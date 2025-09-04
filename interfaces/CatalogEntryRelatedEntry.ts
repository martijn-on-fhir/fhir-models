import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export interface CatalogEntryRelatedEntry extends BackboneElement {

  /**
   * The reference to the related item.
   */
  item: Reference;
  /**
   * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
   */
  relationtype: ('triggers'|'is-replaced-by');
  _relationtype?: Element | undefined;

}