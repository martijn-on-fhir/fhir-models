import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { SubstancePolymerMonomerSetStartingMaterial } from './SubstancePolymerMonomerSetStartingMaterial';

/**
 * Todo.
 */
export interface SubstancePolymerMonomerSet extends BackboneElement {

  /**
   * Todo.
   */
  ratioType?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  startingMaterial?: SubstancePolymerMonomerSetStartingMaterial[] | undefined;

}