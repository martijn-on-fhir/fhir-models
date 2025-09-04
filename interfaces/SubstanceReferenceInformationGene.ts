import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Todo.
 */
export interface SubstanceReferenceInformationGene extends BackboneElement {

  /**
   * Todo.
   */
  gene?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  geneSequenceOrigin?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  source?: Reference[] | undefined;

}