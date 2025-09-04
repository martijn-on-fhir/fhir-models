import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Indicates who or what performed or participated in the charged service.
 */
export interface ChargeItemPerformer extends BackboneElement {

  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  actor: Reference;
  /**
   * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
   */
  function?: CodeableConcept | undefined;

}