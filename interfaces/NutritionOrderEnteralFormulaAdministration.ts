import { BackboneElement } from './BackboneElement';
import { Quantity } from './Quantity';
import { Ratio } from './Ratio';
import { Timing } from './Timing';

/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
export interface NutritionOrderEnteralFormulaAdministration extends BackboneElement {

  /**
   * The volume of formula to provide to the patient per the specified administration schedule.
   */
  quantity?: Quantity | undefined;
  /**
   * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
   */
  rateQuantity?: Quantity | undefined;
  /**
   * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
   */
  rateRatio?: Ratio | undefined;
  /**
   * The time period and frequency at which the enteral formula should be delivered to the patient.
   */
  schedule?: Timing | undefined;

}