import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Money } from './Money';

/**
 * Overall costs associated with the plan.
 */
export interface InsurancePlanPlanGeneralCost extends BackboneElement {

  /**
   * Additional information about the general costs associated with this plan.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * Value of the cost.
   */
  cost?: Money | undefined;
  /**
   * Number of participants enrolled in the plan.
   */
  groupSize?: number | undefined;
  /**
   * Type of cost.
   */
  type?: CodeableConcept | undefined;

}