import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Parameters to the transform.
 */
export interface StructureMapGroupRuleTargetParameter extends BackboneElement {

  /**
   * Parameter value - variable or literal.
   */
  valueId?: string | undefined;
  _valueId?: Element | undefined;
  /**
   * Parameter value - variable or literal.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * Parameter value - variable or literal.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * Parameter value - variable or literal.
   */
  valueInteger?: number | undefined;
  /**
   * Parameter value - variable or literal.
   */
  valueDecimal?: number | undefined;

}