import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { SubstancePolymerRepeatRepeatUnit } from './SubstancePolymerRepeatRepeatUnit';

/**
 * Todo.
 */
export interface SubstancePolymerRepeat extends BackboneElement {

  /**
   * Todo.
   */
  averageMolecularFormula?: string | undefined;
  _averageMolecularFormula?: Element | undefined;
  /**
   * Todo.
   */
  numberOfUnits?: number | undefined;
  /**
   * Todo.
   */
  repeatUnit?: SubstancePolymerRepeatRepeatUnit[] | undefined;
  /**
   * Todo.
   */
  repeatUnitAmountType?: CodeableConcept | undefined;

}