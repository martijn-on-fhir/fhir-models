import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { CoverageCostToBeneficiaryException } from './CoverageCostToBeneficiaryException';
import { Money } from './Money';
import { Quantity } from './Quantity';

/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export interface CoverageCostToBeneficiary extends BackboneElement {

  /**
   * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   */
  exception?: CoverageCostToBeneficiaryException[] | undefined;
  /**
   * For example visit, specialist visits, emergency, inpatient care, etc.
   */
  type?: CodeableConcept | undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  valueMoney?: Money | undefined;

}