import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Timing } from './Timing';

/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export interface NutritionOrderSupplement extends BackboneElement {

  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  instruction?: string | undefined;
  _instruction?: Element | undefined;
  /**
   * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
   */
  productName?: string | undefined;
  _productName?: Element | undefined;
  /**
   * The amount of the nutritional supplement to be given.
   */
  quantity?: Quantity | undefined;
  /**
   * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
   */
  schedule?: Timing[] | undefined;
  /**
   * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
   */
  type?: CodeableConcept | undefined;

}