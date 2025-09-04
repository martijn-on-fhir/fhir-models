import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { StructureMapGroupInput } from './StructureMapGroupInput';
import { StructureMapGroupRule } from './StructureMapGroupRule';

/**
 * Organizes the mapping into manageable chunks for human review/ease of maintenance.
 */
export interface StructureMapGroup extends BackboneElement {

  /**
   * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * Another group that this group adds rules to.
   */
  extends?: string | undefined;
  _extends?: Element | undefined;
  /**
   * If no inputs are named, then the entry mappings are type based.
   */
  input: StructureMapGroupInput[];
  /**
   * A unique name for the group for the convenience of human readers.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Transform Rule from source to target.
   */
  rule: StructureMapGroupRule[];
  /**
   * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
   */
  typeMode: ('none'|'types'|'type-and-types');
  _typeMode?: Element | undefined;

}