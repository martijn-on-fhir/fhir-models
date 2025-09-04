import { Element } from './Element';

/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export interface DataRequirementSort extends Element {

  /**
   * The direction of the sort, ascending or descending.
   */
  direction: ('ascending'|'descending');
  _direction?: Element | undefined;
  /**
   * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
   */
  path: string;
  _path?: Element | undefined;

}