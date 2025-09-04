import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { SubstanceAmount } from './SubstanceAmount';
import { SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation } from './SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation';
import { SubstancePolymerRepeatRepeatUnitStructuralRepresentation } from './SubstancePolymerRepeatRepeatUnitStructuralRepresentation';

/**
 * Todo.
 */
export interface SubstancePolymerRepeatRepeatUnit extends BackboneElement {

  /**
   * Todo.
   */
  amount?: SubstanceAmount | undefined;
  /**
   * Todo.
   */
  degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[] | undefined;
  /**
   * Todo.
   */
  orientationOfPolymerisation?: CodeableConcept | undefined;
  /**
   * Todo.
   */
  repeatUnit?: string | undefined;
  _repeatUnit?: Element | undefined;
  /**
   * Todo.
   */
  structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentation[] | undefined;

}