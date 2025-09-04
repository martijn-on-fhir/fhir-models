import { BackboneElement } from './BackboneElement';
import { ConceptMapGroupElementTargetDependsOn } from './ConceptMapGroupElementTargetDependsOn';
import { Element } from './Element';

/**
 * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
 */
export interface ConceptMapGroupElementTarget extends BackboneElement {

  /**
   * Identity (code or path) or the element/item that the map refers to.
   */
  code?: string | undefined;
  _code?: Element | undefined;
  /**
   * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
   */
  dependsOn?: ConceptMapGroupElementTargetDependsOn[] | undefined;
  /**
   * The display is ignored when processing the map.
   */
  display?: string | undefined;
  _display?: Element | undefined;
  /**
   * This element is labeled as a modifier because it may indicate that a target does not apply.
   */
  equivalence: ('relatedto'|'equivalent'|'equal'|'wider'|'subsumes'|'narrower'|'specializes'|'inexact'|'unmatched'|'disjoint');
  _equivalence?: Element | undefined;
  /**
   * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
   */
  product?: ConceptMapGroupElementTargetDependsOn[] | undefined;

}