import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * Todo.
 */
export interface SubstanceReferenceInformationGeneElement extends BackboneElement {

  /**
   * Todo.
   */
  element?: Identifier | undefined;
  /**
   * Todo.
   */
  source?: Reference[] | undefined;
  /**
   * Todo.
   */
  type?: CodeableConcept | undefined;

}