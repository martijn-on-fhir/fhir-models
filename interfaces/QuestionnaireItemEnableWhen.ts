import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
 */
export interface QuestionnaireItemEnableWhen extends BackboneElement {

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerBoolean?: boolean | undefined;
  _answerBoolean?: Element | undefined;
  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDecimal?: number | undefined;
  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerInteger?: number | undefined;
  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDate?: string | undefined;
  _answerDate?: Element | undefined;
  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDateTime?: string | undefined;
  _answerDateTime?: Element | undefined;
  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerTime?: string | undefined;
  _answerTime?: Element | undefined;
  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerString?: string | undefined;
  _answerString?: Element | undefined;
  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerCoding?: Coding | undefined;
  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerQuantity?: Quantity | undefined;
  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerReference?: Reference | undefined;
  /**
   * Specifies the criteria by which the question is enabled.
   */
  operator: ('exists'|'='|'!='|'>'|'<'|'>='|'<=');
  _operator?: Element | undefined;
  /**
   * If multiple question occurrences are present for the same question (same linkId), then this refers to the nearest question occurrence reachable by tracing first the "ancestor" axis and then the "preceding" axis and then the "following" axis.
   */
  question: string;
  _question?: Element | undefined;

}