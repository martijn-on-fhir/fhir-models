import { Element } from './Element';

/**
 * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. For tooling simplicity, the base information must always be populated in element definitions in snap shots, even if it is the same.
 */
export interface ElementDefinitionBase extends Element {

  /**
   * This is provided to code generation, since the serialization representation in JSON differs depending on whether the base element has max > 1. Also, some forms of code generation may differ.
   */
  max: string;
  _max?: Element | undefined;
  /**
   * This is provided for consistency with max, and may affect code generation of mandatory elements of the base resource are generated differently (some reference implementations have done this).
   */
  min: number;
  /**
   * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.
   */
  path: string;
  _path?: Element | undefined;

}