import { Element } from './Element';
import { XPath } from './XPath';

/**
 * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
 */
export interface ElementDefinitionConstraint extends Element {

  /**
   * In the absense of an expression, the expression is likely not enforceable by validators, and might be missed by many systems.
   */
  expression?: string | undefined;
  _expression?: Element | undefined;
  /**
   * Should be expressed in business terms as much as possible.
   */
  human: string;
  _human?: Element | undefined;
  /**
   * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
   */
  key: string;
  _key?: Element | undefined;
  /**
   * To be used if the reason for the constraint might not be intuitive to all implementers.
   */
  requirements?: string | undefined;
  _requirements?: Element | undefined;
  /**
   * This allows constraints to be asserted as "shall" (error) and "should" (warning).
   */
  severity: ('error'|'warning');
  _severity?: Element | undefined;
  /**
   * This is used when, e.g. rendering, where it is not useful to present inherited constraints when rendering the snapshot.
   */
  source?: string | undefined;
  _source?: Element | undefined;
  /**
   * Elements SHALL use "f" as the namespace prefix for the FHIR namespace, and "x" for the xhtml namespace, and SHALL NOT use any other prefixes.     Note: XPath is generally considered not useful because it does not apply to JSON and other formats and because of XSLT implementation issues, and may be removed in the future.
   */
  xpath?: string | undefined;
  _xpath?: Element | undefined;

}