import { Array } from './Array';
import { BackboneElement } from './BackboneElement';
import { BundleContentType } from './BundleContentType';
import { BundleEntryRequest } from './BundleEntryRequest';
import { BundleEntryResponse } from './BundleEntryResponse';
import { BundleEntrySearch } from './BundleEntrySearch';
import { BundleLink } from './BundleLink';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Signature } from './Signature';

/**
 * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
 */
export interface CapabilityStatementSoftware extends BackboneElement {

  /**
   * fullUrl might not be [unique in the context of a resource](bundle.html#bundle-unique). Note that since [FHIR resources do not need to be served through the FHIR API](references.html), the fullURL might be a URN or an absolute URL that does not end with the logical id of the resource (Resource.id). However, but if the fullUrl does look like a RESTful server URL (e.g. meets the [regex](references.html#regex), then the 'id' portion of the fullUrl SHALL end with the Resource.id.
   * Note that the fullUrl is not the same as the canonical URL - it's an absolute url for an endpoint serving the resource (these will happen to have the same value on the canonical server for the resource with the canonical URL).
   */
  fullUrl?: string | undefined;
  _fullUrl?: Element | undefined;
  /**
   * A series of links that provide context to this entry.
   */
  link?: BundleLink[] | undefined;
  /**
   * Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
   */
  request?: BundleEntryRequest | undefined;
  /**
   * The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.
   */
  resource?: BundleContentType | undefined;
  /**
   * Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
   */
  response?: BundleEntryResponse | undefined;
  /**
   * Information about the search process that lead to the creation of this entry.
   */
  search?: BundleEntrySearch | undefined;
}
/**
 * A container for a collection of resources.
 */
export interface Bundle<BundleContentType = FhirResource> extends Resource {
  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Bundle';
  /**
   * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
   */
  entry?: Array<BundleEntry<BundleContentType>> | undefined;
  /**
   * Persistent identity generally only matters for batches of type Document, Message, and Collection. It would not normally be populated for search and history results and servers ignore Bundle.identifier when processing batches and transactions. For Documents  the .identifier SHALL be populated such that the .identifier is globally unique.
   */
  identifier?: Identifier | undefined;
  /**
   * Both Bundle.link and Bundle.entry.link are defined to support providing additional context when Bundles are used (e.g. [HATEOAS](http://en.wikipedia.org/wiki/HATEOAS)).
   * Bundle.entry.link corresponds to links found in the HTTP header if the resource in the entry was [read](http.html#read) directly.
   * This specification defines some specific uses of Bundle.link for [searching](search.html#conformance) and [paging](http.html#paging), but no specific uses for Bundle.entry.link, and no defined function in a transaction - the meaning is implementation specific.
   */
  link?: BundleLink[] | undefined;
  /**
   * The signature could be created by the "author" of the bundle or by the originating device.   Requirements around inclusion of a signature, verification of signatures and treatment of signed/non-signed bundles is implementation-environment specific.
   */
  signature?: Signature | undefined;
  /**
   * For many bundles, the timestamp is equal to .meta.lastUpdated, because they are not stored (e.g. search results). When a bundle is placed in a persistent store, .meta.lastUpdated will be usually be changed by the server. When the bundle is a message, a middleware agent altering the message (even if not stored) SHOULD update .meta.lastUpdated. .timestamp is used to track the original time of the Bundle, and SHOULD be populated.
   * Usage:
   * * document : the date the document was created. Note: the composition may predate the document, or be associated with multiple documents. The date of the composition - the authoring time - may be earlier than the document assembly time
   * * message : the date that the content of the message was assembled. This date is not changed by middleware engines unless they add additional data that changes the meaning of the time of the message
   * * history : the date that the history was assembled. This time would be used as the _since time to ask for subsequent updates
   * * searchset : the time that the search set was assembled. Note that different pages MAY have different timestamps but need not. Having different timestamps does not imply that subsequent pages will represent or include changes made since the initial query
   * * transaction | transaction-response | batch | batch-response | collection : no particular assigned meaning
   * The timestamp value should be greater than the lastUpdated and other timestamps in the resources in the bundle, and it should be equal or earlier than the .meta.lastUpdated on the Bundle itself.
   */
  timestamp?: string | undefined;
  _timestamp?: Element | undefined;
  /**
   * Only used if the bundle is a search result set. The total does not include resources such as OperationOutcome and included resources, only the total number of matching resources.
   */
  total?: number | undefined;
  /**
   * It's possible to use a bundle for other purposes (e.g. a document can be accepted as a transaction). This is primarily defined so that there can be specific rules for some of the bundle types.
   */
  type: ('document'|'message'|'transaction'|'transaction-response'|'batch'|'batch-response'|'history'|'searchset'|'collection');
  _type?: Element | undefined;
}
/**
 * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
 */
export interface CapabilityStatementSoftware extends BackboneElement {
  /**
   * Name the software is known by.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Date this version of the software was released.
   */
  releaseDate?: string | undefined;
  _releaseDate?: Element | undefined;
  /**
   * If possible, a version should be specified, as statements are likely to be different for different versions of software.
   */
  version?: string | undefined;
  _version?: Element | undefined;

}