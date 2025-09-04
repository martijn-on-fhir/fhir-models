import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Identifies the types of resource or data type elements to which the extension can be applied.
 */
export interface StructureDefinitionContext extends BackboneElement {

  /**
   * An expression that defines where an extension can be used in resources.
   */
  expression: string;
  _expression?: Element | undefined;
  /**
   * Defines how to interpret the expression that defines what the context of the extension is.
   */
  type: ('fhirpath'|'element'|'extension');
  _type?: Element | undefined;

}