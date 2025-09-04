import { BackboneElement } from './BackboneElement';
import { ElementDefinition } from './ElementDefinition';

/**
 * A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition.
 */
export interface StructureDefinitionSnapshot extends BackboneElement {

  /**
   * Captures constraints on each element within the resource.
   */
  element: ElementDefinition[];

}