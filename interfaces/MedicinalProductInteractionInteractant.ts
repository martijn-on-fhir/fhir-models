import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * The specific medication, food or laboratory test that interacts.
 */
export interface MedicinalProductInteractionInteractant extends BackboneElement {

  /**
   * The specific medication, food or laboratory test that interacts.
   */
  itemReference?: Reference | undefined;
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  itemCodeableConcept?: CodeableConcept | undefined;

}