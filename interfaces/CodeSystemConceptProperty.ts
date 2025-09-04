import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';

/**
 * A property value for this concept.
 */
export interface CodeSystemConceptProperty extends BackboneElement {

  /**
   * A code that is a reference to CodeSystem.property.code.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * The value of this property.
   */
  valueCode?: string | undefined;
  _valueCode?: Element | undefined;
  /**
   * The value of this property.
   */
  valueCoding?: Coding | undefined;
  /**
   * The value of this property.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * The value of this property.
   */
  valueInteger?: number | undefined;
  /**
   * The value of this property.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * The value of this property.
   */
  valueDateTime?: string | undefined;
  _valueDateTime?: Element | undefined;
  /**
   * The value of this property.
   */
  valueDecimal?: number | undefined;

}