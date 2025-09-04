import { BackboneElement } from './BackboneElement';
import { Co } from './Co';
import { CodeableConcept } from './CodeableConcept';
import { Money } from './Money';

/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export interface ClaimResponseTotal extends BackboneElement {

  /**
   * Monetary total amount associated with the category.
   */
  amount: Money;
  /**
   * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
   */
  category: CodeableConcept;

}