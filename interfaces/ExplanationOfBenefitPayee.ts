import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';
import { Subscriber } from './Subscriber';

/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
 */
export interface ExplanationOfBenefitPayee extends BackboneElement {

  /**
   * Not required if the payee is 'subscriber' or 'provider'.
   */
  party?: Reference | undefined;
  /**
   * Type of Party to be reimbursed: Subscriber, provider, other.
   */
  type?: CodeableConcept | undefined;

}