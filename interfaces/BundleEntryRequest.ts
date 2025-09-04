import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
 */
export interface BundleEntryRequest extends BackboneElement {

  /**
   * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
   */
  ifMatch?: string | undefined;
  _ifMatch?: Element | undefined;
  /**
   * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  ifModifiedSince?: string | undefined;
  _ifModifiedSince?: Element | undefined;
  /**
   * Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
   */
  ifNoneExist?: string | undefined;
  _ifNoneExist?: Element | undefined;
  /**
   * If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  ifNoneMatch?: string | undefined;
  _ifNoneMatch?: Element | undefined;
  /**
   * In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
   */
  method: ('GET'|'HEAD'|'POST'|'PUT'|'DELETE'|'PATCH');
  _method?: Element | undefined;
  /**
   * E.g. for a Patient Create, the method would be "POST" and the URL would be "Patient". For a Patient Update, the method would be PUT and the URL would be "Patient/[id]".
   */
  url: string;
  _url?: Element | undefined;

}