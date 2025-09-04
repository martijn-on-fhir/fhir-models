import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Money } from './Money';

/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export interface InvoiceLineItemPriceComponent extends BackboneElement {

  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  amount?: Money | undefined;
  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: CodeableConcept | undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  factor?: number | undefined;
  /**
   * This code identifies the type of the component.
   */
  type: ('base'|'surcharge'|'deduction'|'discount'|'tax'|'informational');
  _type?: Element | undefined;

}