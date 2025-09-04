import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Information about the search process that lead to the creation of this entry.
 */
export interface BundleEntrySearch extends BackboneElement {

  /**
   * There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In these circumstances, 'match' takes precedence.
   */
  mode?: ('match'|'include'|'outcome') | undefined;
  _mode?: Element | undefined;
  /**
   * Servers are not required to return a ranking score. 1 is most relevant, and 0 is least relevant. Often, search results are sorted by score, but the client may specify a different sort order.
   * See [Patient Match](patient-operation-match.html) for the EMPI search which relates to this element.
   */
  score?: number | undefined;

}