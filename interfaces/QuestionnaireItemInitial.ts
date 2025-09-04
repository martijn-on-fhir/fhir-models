import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
 */
export interface QuestionnaireItemInitial extends BackboneElement {

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueDecimal?: number | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueInteger?: number | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueDate?: string | undefined;
  _valueDate?: Element | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueDateTime?: string | undefined;
  _valueDateTime?: Element | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueTime?: string | undefined;
  _valueTime?: Element | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueUri?: string | undefined;
  _valueUri?: Element | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueAttachment?: Attachment | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueCoding?: Coding | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  valueReference?: Reference | undefined;

}