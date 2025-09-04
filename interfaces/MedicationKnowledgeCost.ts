import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Money } from './Money';

/**
 * The price of the medication.
 */
export interface MedicationKnowledgeCost extends BackboneElement {

  /**
   * The price of the medication.
   */
  cost: Money;
  /**
   * The source or owner that assigns the price to the medication.
   */
  source?: string | undefined;
  _source?: Element | undefined;
  /**
   * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.
   */
  type: CodeableConcept;

}