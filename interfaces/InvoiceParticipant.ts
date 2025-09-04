import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Indicates who or what performed or participated in the charged service.
 */
export interface InvoiceParticipant extends BackboneElement {

  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  actor: Reference;
  /**
   * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
   */
  role?: CodeableConcept | undefined;

}