import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Quantity } from './Quantity';

/**
 * List of the costs associated with a specific benefit.
 */
export interface InsurancePlanPlanSpecificCostBenefitCost extends BackboneElement {

  /**
   * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
   */
  applicability?: CodeableConcept | undefined;
  /**
   * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
   */
  qualifiers?: CodeableConcept[] | undefined;
  /**
   * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
   */
  type: CodeableConcept;
  /**
   * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
   */
  value?: Quantity | undefined;

}