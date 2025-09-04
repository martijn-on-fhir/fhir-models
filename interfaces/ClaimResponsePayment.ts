import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { EFT } from './EFT';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Money } from './Money';

/**
 * Payment details for the adjudication of the claim.
 */
export interface ClaimResponsePayment extends BackboneElement {

  /**
   * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
   */
  adjustment?: Money | undefined;
  /**
   * Reason for the payment adjustment.
   */
  adjustmentReason?: CodeableConcept | undefined;
  /**
   * Benefits payable less any payment adjustment.
   */
  amount: Money;
  /**
   * Estimated date the payment will be issued or the actual issue date of payment.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * For example: EFT number or check number.
   */
  identifier?: Identifier | undefined;
  /**
   * Whether this represents partial or complete payment of the benefits payable.
   */
  type: CodeableConcept;

}