import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export interface ConsentProvisionActor extends BackboneElement {

  /**
   * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  reference: Reference;
  /**
   * How the individual is involved in the resources content that is described in the exception.
   */
  role: CodeableConcept;

}