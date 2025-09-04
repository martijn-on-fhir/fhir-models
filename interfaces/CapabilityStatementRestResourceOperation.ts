import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.
 * If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
 */
export interface CapabilityStatementRestResourceOperation extends BackboneElement {

  /**
   * This can be used to build an HTML form to invoke the operation, for instance.
   */
  definition: string;
  _definition?: Element | undefined;
  /**
   * Documentation that describes anything special about the operation behavior, possibly detailing different behavior for system, type and instance-level invocation of the operation.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * The name here SHOULD be the same as the name in the definition, unless there is a name clash and the name cannot be used. The name does not include the "$" portion that is always included in the URL.
   */
  name: string;
  _name?: Element | undefined;

}