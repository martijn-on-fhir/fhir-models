import { BackboneElement } from './BackboneElement';
import { ElementDefinition } from './ElementDefinition';

/**
 * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
 */
export interface StructureDefinitionDifferential extends BackboneElement {

  /**
   * Captures constraints on each element within the resource.
   */
  element: ElementDefinition[];

}