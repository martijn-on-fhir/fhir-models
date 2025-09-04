import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * Todo.
 */
export interface SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends BackboneElement {

  /**
   * Todo.
   */
  attachment?: Attachment | undefined;
  /**
   * Todo.
   */
  representation?: string | undefined;
  _representation?: Element | undefined;
  /**
   * Todo.
   */
  type?: CodeableConcept | undefined;

}