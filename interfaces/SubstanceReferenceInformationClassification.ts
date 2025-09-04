import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Todo.
 */
export interface SubstanceReferenceInformationClassification extends BackboneElement {

  /**
   * Todo.
   */
  classification?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  domain?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  source?: Reference[] | undefined;
  /**
   * Todo.
   */
  subtype?: CodeableConcept[] | undefined;

}