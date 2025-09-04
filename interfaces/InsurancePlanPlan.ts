import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Identifier } from './Identifier';
import { InsurancePlanPlanGeneralCost } from './InsurancePlanPlanGeneralCost';
import { InsurancePlanPlanSpecificCost } from './InsurancePlanPlanSpecificCost';
import { Reference } from './Reference';

/**
 * Details about an insurance plan.
 */
export interface InsurancePlanPlan extends BackboneElement {

  /**
   * The geographic region in which a health insurance plan's benefits apply.
   */
  coverageArea?: Reference[] | undefined;
  /**
   * Overall costs associated with the plan.
   */
  generalCost?: InsurancePlanPlanGeneralCost[] | undefined;
  /**
   * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: Reference[] | undefined;
  /**
   * Costs associated with the coverage provided by the product.
   */
  specificCost?: InsurancePlanPlanSpecificCost[] | undefined;
  /**
   * Type of plan. For example, "Platinum" or "High Deductable".
   */
  type?: CodeableConcept | undefined;

}