import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Which other rules to apply in the context of this rule.
 */
export interface StructureMapGroupRuleDependent extends BackboneElement {

  /**
   * Name of a rule or group to apply.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Variable to pass to the rule or group.
   */
  variable: string[];
  _variable?: Element[] | undefined;

}