import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Money } from './Money';
import { Reference } from './Reference';

/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export interface PaymentReconciliationDetail extends BackboneElement {

  /**
   * The monetary amount allocated from the total payment to the payable.
   */
  amount?: Money | undefined;
  /**
   * The date from the response resource containing a commitment to pay.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * Unique identifier for the current payment item for the referenced payable.
   */
  identifier?: Identifier | undefined;
  /**
   * The party which is receiving the payment.
   */
  payee?: Reference | undefined;
  /**
   * Unique identifier for the prior payment item for the referenced payable.
   */
  predecessor?: Identifier | undefined;
  /**
   * A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  request?: Reference | undefined;
  /**
   * A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  response?: Reference | undefined;
  /**
   * A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  responsible?: Reference | undefined;
  /**
   * The party which submitted the claim or financial transaction.
   */
  submitter?: Reference | undefined;
  /**
   * For example: payment, adjustment, funds advance, etc.
   */
  type: CodeableConcept;

}