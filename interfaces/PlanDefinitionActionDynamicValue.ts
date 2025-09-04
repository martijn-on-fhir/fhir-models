import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Expression } from './Expression';

/**
 * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
 */
export interface PlanDefinitionActionDynamicValue extends BackboneElement {

  /**
   * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
   */
  expression?: Expression | undefined;
  /**
   * To specify the path to the current action being realized, the %action environment variable is available in this path. For example, to specify the description element of the target action, the path would be %action.description. The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: string | undefined;
  _path?: Element | undefined;

}