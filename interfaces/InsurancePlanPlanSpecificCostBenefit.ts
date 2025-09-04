import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { InsurancePlanPlanSpecificCostBenefitCost } from './InsurancePlanPlanSpecificCostBenefitCost';

/**
 * List of the specific benefits under this category of benefit.
 */
export interface InsurancePlanPlanSpecificCostBenefit extends BackboneElement {

  /**
   * List of the costs associated with a specific benefit.
   */
  cost?: InsurancePlanPlanSpecificCostBenefitCost[] | undefined;
  /**
   * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
   */
  type: CodeableConcept;

}