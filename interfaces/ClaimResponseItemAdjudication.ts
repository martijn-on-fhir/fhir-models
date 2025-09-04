import { BackboneElement } from './BackboneElement';
import { Co } from './Co';
import { CodeableConcept } from './CodeableConcept';
import { Money } from './Money';

/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export interface ClaimResponseItemAdjudication extends BackboneElement {

  /**
   * For example: amount submitted, eligible amount, co-payment, and benefit payable.
   */
  amount?: Money | undefined;
  /**
   * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
   */
  category: CodeableConcept;
  /**
   * For example may indicate that the funds for this benefit type have been exhausted.
   */
  reason?: CodeableConcept | undefined;
  /**
   * For example: eligible percentage or co-payment percentage.
   */
  value?: number | undefined;

}