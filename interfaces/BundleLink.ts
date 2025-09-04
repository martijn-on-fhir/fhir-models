import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Both Bundle.link and Bundle.entry.link are defined to support providing additional context when Bundles are used (e.g. [HATEOAS](http://en.wikipedia.org/wiki/HATEOAS)).
 * Bundle.entry.link corresponds to links found in the HTTP header if the resource in the entry was [read](http.html#read) directly.
 * This specification defines some specific uses of Bundle.link for [searching](search.html#conformance) and [paging](http.html#paging), but no specific uses for Bundle.entry.link, and no defined function in a transaction - the meaning is implementation specific.
 */
export interface BundleLink extends BackboneElement {

  /**
   * A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
   */
  relation: string;
  _relation?: Element | undefined;
  /**
   * The reference details for the link.
   */
  url: string;
  _url?: Element | undefined;

}