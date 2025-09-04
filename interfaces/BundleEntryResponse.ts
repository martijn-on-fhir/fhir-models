import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { FhirResource } from './FhirResource';

/**
 * Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
 */
export interface BundleEntryResponse extends BackboneElement {

  /**
   * Etags match the Resource.meta.versionId. The ETag has to match the version id in the header if a resource is included.
   */
  etag?: string | undefined;
  _etag?: Element | undefined;
  /**
   * This has to match the same time in the meta header (meta.lastUpdated) if a resource is included.
   */
  lastModified?: string | undefined;
  _lastModified?: Element | undefined;
  /**
   * The location header created by processing this operation, populated if the operation returns a location.
   */
  location?: string | undefined;
  _location?: Element | undefined;
  /**
   * For a POST/PUT operation, this is the equivalent outcome that would be returned for prefer = operationoutcome - except that the resource is always returned whether or not the outcome is returned.
   * This outcome is not used for error responses in batch/transaction, only for hints and warnings. In a batch operation, the error will be in Bundle.entry.response, and for transaction, there will be a single OperationOutcome instead of a bundle in the case of an error.
   */
  outcome?: FhirResource | undefined;
  /**
   * The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
   */
  status: string;
  _status?: Element | undefined;

}