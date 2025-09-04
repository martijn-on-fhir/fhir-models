import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { SubstanceAmount } from './SubstanceAmount';

/**
 * Todo.
 */
export interface SubstancePolymerMonomerSetStartingMaterial extends BackboneElement {

  /**
   * Todo.
   */
  amount?: SubstanceAmount | undefined;
  /**
   * Todo.
   */
  isDefining?: boolean | undefined;
  _isDefining?: Element | undefined;
  /**
   * Todo.
   */
  material?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  type?: CodeableConcept | undefined;

}