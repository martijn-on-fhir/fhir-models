import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
export interface ListEntry extends BackboneElement {

  /**
   * When this item was added to the list.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
   */
  deleted?: boolean | undefined;
  _deleted?: Element | undefined;
  /**
   * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
   */
  flag?: CodeableConcept | undefined;
  /**
   * A reference to the actual resource from which data was derived.
   */
  item: Reference;

}