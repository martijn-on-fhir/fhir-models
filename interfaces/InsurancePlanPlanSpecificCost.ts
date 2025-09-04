import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { InsurancePlanPlanSpecificCostBenefit } from './InsurancePlanPlanSpecificCostBenefit';

/**
 * Costs associated with the coverage provided by the product.
 */
export interface InsurancePlanPlanSpecificCost extends BackboneElement {

  /**
   * List of the specific benefits under this category of benefit.
   */
  benefit?: InsurancePlanPlanSpecificCostBenefit[] | undefined;
  /**
   * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
   */
  category: CodeableConcept;

}