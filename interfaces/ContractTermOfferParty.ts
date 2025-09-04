import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Offer Recipient.
 */
export interface ContractTermOfferParty extends BackboneElement {

  /**
   * Participant in the offer.
   */
  reference: Reference[];
  /**
   * How the party participates in the offer.
   */
  role: CodeableConcept;

}