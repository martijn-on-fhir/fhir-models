import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 */
export interface ClaimPayee extends BackboneElement {

  /**
   * Not required if the payee is 'subscriber' or 'provider'.
   */
  party?: Reference | undefined;
  /**
   * Type of Party to be reimbursed: subscriber, provider, other.
   */
  type: CodeableConcept;

}