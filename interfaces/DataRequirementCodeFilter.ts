import { Coding } from './Coding';
import { Element } from './Element';

/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export interface DataRequirementCodeFilter extends Element {

  /**
   * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
   */
  code?: Coding[] | undefined;
  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: string | undefined;
  _path?: Element | undefined;
  /**
   * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
   */
  searchParam?: string | undefined;
  _searchParam?: Element | undefined;
  /**
   * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
   */
  valueSet?: string | undefined;
  _valueSet?: Element | undefined;

}