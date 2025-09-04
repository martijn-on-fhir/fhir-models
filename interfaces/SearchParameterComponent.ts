import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Used to define the parts of a composite search parameter.
 */
export interface SearchParameterComponent extends BackboneElement {

  /**
   * The definition of the search parameter that describes this part.
   */
  definition: string;
  _definition?: Element | undefined;
  /**
   * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
   */
  expression: string;
  _expression?: Element | undefined;

}