import { ParametersParameter } from './ParametersParameter';
import { Resource } from './Resource';

/**
 * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export interface Parameters extends Resource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Parameters';
  /**
   * A parameter passed to or received from the operation.
   */
  parameter?: ParametersParameter[] | undefined;

}