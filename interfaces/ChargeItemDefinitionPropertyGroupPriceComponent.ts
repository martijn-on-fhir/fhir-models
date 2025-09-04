import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Money } from './Money';

/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
 */
export interface ChargeItemDefinitionPropertyGroupPriceComponent extends BackboneElement {

  /**
   * The amount calculated for this component.
   */
  amount?: Money | undefined;
  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: CodeableConcept | undefined;
  /**
   * The factor that has been applied on the base price for calculating this component.
   */
  factor?: number | undefined;
  /**
   * This code identifies the type of the component.
   */
  type: ('base'|'surcharge'|'deduction'|'discount'|'tax'|'informational');
  _type?: Element | undefined;

}