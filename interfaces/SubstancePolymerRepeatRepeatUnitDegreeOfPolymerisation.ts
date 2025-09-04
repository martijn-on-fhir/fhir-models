import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { SubstanceAmount } from './SubstanceAmount';

/**
 * Todo.
 */
export interface SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends BackboneElement {

  /**
   * Todo.
   */
  amount?: SubstanceAmount | undefined;
  /**
   * Todo.
   */
  degree?: CodeableConcept | undefined;

}