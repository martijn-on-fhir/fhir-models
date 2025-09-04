import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Expression } from './Expression';

/**
 * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 */
export interface ActivityDefinitionDynamicValue extends BackboneElement {

  /**
   * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
   */
  expression: Expression;
  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path: string;
  _path?: Element | undefined;

}