import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { StructureMapGroupRuleDependent } from './StructureMapGroupRuleDependent';
import { StructureMapGroupRuleSource } from './StructureMapGroupRuleSource';
import { StructureMapGroupRuleTarget } from './StructureMapGroupRuleTarget';

/**
 * Transform Rule from source to target.
 */
export interface StructureMapGroupRule extends BackboneElement {

  /**
   * Which other rules to apply in the context of this rule.
   */
  dependent?: StructureMapGroupRuleDependent[] | undefined;
  /**
   * Documentation for this instance of data.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * Name of the rule for internal references.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Rules contained in this rule.
   */
  rule?: StructureMapGroupRule[] | undefined;
  /**
   * Source inputs to the mapping.
   */
  source: StructureMapGroupRuleSource[];
  /**
   * Content to create because of this mapping rule.
   */
  target?: StructureMapGroupRuleTarget[] | undefined;

}