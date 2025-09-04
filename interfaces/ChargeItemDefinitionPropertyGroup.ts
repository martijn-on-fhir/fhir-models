import { BackboneElement } from './BackboneElement';
import { ChargeItemDefinitionApplicability } from './ChargeItemDefinitionApplicability';
import { ChargeItemDefinitionPropertyGroupPriceComponent } from './ChargeItemDefinitionPropertyGroupPriceComponent';

/**
 * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
 */
export interface ChargeItemDefinitionPropertyGroup extends BackboneElement {

  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  applicability?: ChargeItemDefinitionApplicability[] | undefined;
  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
   */
  priceComponent?: ChargeItemDefinitionPropertyGroupPriceComponent[] | undefined;

}