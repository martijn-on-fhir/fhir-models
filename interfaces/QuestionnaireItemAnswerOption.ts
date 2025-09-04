import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
 */
export interface QuestionnaireItemAnswerOption extends BackboneElement {

  /**
   * Use this instead of initial[v] if answerValueSet is present.
   */
  initialSelected?: boolean | undefined;
  _initialSelected?: Element | undefined;
  /**
   * The data type of the value must agree with the item.type.
   */
  valueInteger?: number | undefined;
  /**
   * The data type of the value must agree with the item.type.
   */
  valueDate?: string | undefined;
  _valueDate?: Element | undefined;
  /**
   * The data type of the value must agree with the item.type.
   */
  valueTime?: string | undefined;
  _valueTime?: Element | undefined;
  /**
   * The data type of the value must agree with the item.type.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * The data type of the value must agree with the item.type.
   */
  valueCoding?: Coding | undefined;
  /**
   * The data type of the value must agree with the item.type.
   */
  valueReference?: Reference | undefined;

}