import { BackboneElement } from './BackboneElement';
import { ConceptMapGroupElement } from './ConceptMapGroupElement';
import { ConceptMapGroupUnmapped } from './ConceptMapGroupUnmapped';
import { Element } from './Element';

/**
 * A group of mappings that all have the same source and target system.
 */
export interface ConceptMapGroup extends BackboneElement {

  /**
   * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
   */
  element: ConceptMapGroupElement[];
  /**
   * This is not needed if the source value set is specified and it contains concepts from only a single system.
   */
  source?: string | undefined;
  _source?: Element | undefined;
  /**
   * The specification of a particular code system version may be required for code systems which lack concept permanence.
   */
  sourceVersion?: string | undefined;
  _sourceVersion?: Element | undefined;
  /**
   * This is not needed if the target value set is specified and it contains concepts from only a single system. The group target may also be omitted if all of the target element equivalence values are 'unmatched'.
   */
  target?: string | undefined;
  _target?: Element | undefined;
  /**
   * The specification of a particular code system version may be required for code systems which lack concept permanence.
   */
  targetVersion?: string | undefined;
  _targetVersion?: Element | undefined;
  /**
   * This only applies if the source code has a system value that matches the system defined for the group.
   */
  unmapped?: ConceptMapGroupUnmapped | undefined;

}