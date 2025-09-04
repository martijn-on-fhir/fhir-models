import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Indicates who performed the immunization event.
 */
export interface ImmunizationPerformer extends BackboneElement {

  /**
   * When the individual practitioner who performed the action is known, it is best to send.
   */
  actor: Reference;
  /**
   * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
   */
  function?: CodeableConcept | undefined;

}