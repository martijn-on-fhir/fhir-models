import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { InvoiceLineItemPriceComponent } from './InvoiceLineItemPriceComponent';
import { Reference } from './Reference';

/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
export interface InvoiceLineItem extends BackboneElement {

  /**
   * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
   */
  chargeItemReference?: Reference | undefined;
  /**
   * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
   */
  chargeItemCodeableConcept?: CodeableConcept | undefined;
  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
   */
  priceComponent?: InvoiceLineItemPriceComponent[] | undefined;
  /**
   * Sequence in which the items appear on the invoice.
   */
  sequence?: number | undefined;

}