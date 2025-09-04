import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { ListEntry } from './ListEntry';
import { Reference } from './Reference';

/**
 * A list is a curated collection of resources.
 */
export interface List extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'List';
  /**
   * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
   */
  code?: CodeableConcept | undefined;
  /**
   * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
   */
  emptyReason?: CodeableConcept | undefined;
  /**
   * The encounter that is the context in which this list was created.
   */
  encounter?: Reference | undefined;
  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  entry?: ListEntry[] | undefined;
  /**
   * Identifier for the List assigned for business purposes outside the context of FHIR.
   */
  identifier?: Identifier[] | undefined;
  /**
   * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
   */
  mode: ('working'|'snapshot'|'changes');
  _mode?: Element | undefined;
  /**
   * Comments that apply to the overall list.
   */
  note?: Annotation[] | undefined;
  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
   */
  orderedBy?: CodeableConcept | undefined;
  /**
   * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
   */
  source?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('current'|'retired'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * Some purely arbitrary lists do not have a common subject, so this is optional.
   */
  subject?: Reference | undefined;
  /**
   * A label for the list assigned by the author.
   */
  title?: string | undefined;
  _title?: Element | undefined;

}