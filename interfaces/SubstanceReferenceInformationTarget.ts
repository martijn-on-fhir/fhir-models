import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';

/**
 * Todo.
 */
export interface SubstanceReferenceInformationTarget extends BackboneElement {

  /**
   * Todo.
   */
  amountQuantity?: Quantity | undefined;
  /**
   * Todo.
   */
  amountRange?: Range | undefined;
  /**
   * Todo.
   */
  amountString?: string | undefined;
  _amountString?: Element | undefined;
  /**
   * Todo.
   */
  amountType?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  interaction?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  organism?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  organismType?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  source?: Reference[] | undefined;
  /**
   * Todo.
   */
  target?: Identifier | undefined;
  /**
   * Todo.
   */
  type?: CodeableConcept | undefined;

}