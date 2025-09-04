import { Array } from './Array';
import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { StructureMapGroupRuleTargetParameter } from './StructureMapGroupRuleTargetParameter';

/**
 * Content to create because of this mapping rule.
 */
export interface StructureMapGroupRuleTarget extends BackboneElement {

  /**
   * Type or variable this rule applies to.
   */
  context?: string | undefined;
  _context?: Element | undefined;
  /**
   * How to interpret the context.
   */
  contextType?: ('type'|'variable') | undefined;
  _contextType?: Element | undefined;
  /**
   * Field to create in the context.
   */
  element?: string | undefined;
  _element?: Element | undefined;
  /**
   * If field is a list, how to manage the list.
   */
  listMode?: Array<'first'|'share'|'last'|'collate'> | undefined;
  _listMode?: Element[] | undefined;
  /**
   * Internal rule reference for shared list items.
   */
  listRuleId?: string | undefined;
  _listRuleId?: Element | undefined;
  /**
   * Parameters to the transform.
   */
  parameter?: StructureMapGroupRuleTargetParameter[] | undefined;
  /**
   * How the data is copied / created.
   */
  transform?: ('create'|'copy'|'truncate'|'escape'|'cast'|'append'|'translate'|'reference'|'dateOp'|'uuid'|'pointer'|'evaluate'|'cc'|'c'|'qty'|'id'|'cp') | undefined;
  _transform?: Element | undefined;
  /**
   * Named context for field, if desired, and a field is specified.
   */
  variable?: string | undefined;
  _variable?: Element | undefined;

}