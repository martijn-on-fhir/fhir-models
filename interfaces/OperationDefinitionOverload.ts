import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 */
export interface OperationDefinitionOverload extends BackboneElement {

  /**
   * Comments to go on overload.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * Name of parameter to include in overload.
   */
  parameterName?: string[] | undefined;
  _parameterName?: Element[] | undefined;

}