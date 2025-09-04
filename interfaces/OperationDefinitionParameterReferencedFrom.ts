import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Resolution applies if the referenced parameter exists.
 */
export interface OperationDefinitionParameterReferencedFrom extends BackboneElement {

  /**
   * The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource.
   */
  source: string;
  _source?: Element | undefined;
  /**
   * The id of the element in the referencing resource that is expected to resolve to this resource.
   */
  sourceId?: string | undefined;
  _sourceId?: Element | undefined;

}