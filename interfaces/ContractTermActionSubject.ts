import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Entity of the action.
 */
export interface ContractTermActionSubject extends BackboneElement {

  /**
   * The entity the action is performed or not performed on or for.
   */
  reference: Reference[];
  /**
   * Role type of agent assigned roles in this Contract.
   */
  role?: CodeableConcept | undefined;

}