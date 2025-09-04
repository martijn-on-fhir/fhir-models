import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Money } from './Money';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Contract Valued Item List.
 */
export interface ContractTermAssetValuedItem extends BackboneElement {

  /**
   * Indicates the time during which this Contract ValuedItem information is effective.
   */
  effectiveTime?: string | undefined;
  _effectiveTime?: Element | undefined;
  /**
   * Specific type of Contract Valued Item that may be priced.
   */
  entityCodeableConcept?: CodeableConcept | undefined;
  /**
   * Specific type of Contract Valued Item that may be priced.
   */
  entityReference?: Reference | undefined;
  /**
   * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
   */
  factor?: number | undefined;
  /**
   * Identifies a Contract Valued Item instance.
   */
  identifier?: Identifier | undefined;
  /**
   * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[] | undefined;
  _linkId?: Element[] | undefined;
  /**
   * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
   */
  net?: Money | undefined;
  /**
   * Terms of valuation.
   */
  payment?: string | undefined;
  _payment?: Element | undefined;
  /**
   * When payment is due.
   */
  paymentDate?: string | undefined;
  _paymentDate?: Element | undefined;
  /**
   * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
   */
  points?: number | undefined;
  /**
   * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
   */
  quantity?: Quantity | undefined;
  /**
   * Who will receive payment.
   */
  recipient?: Reference | undefined;
  /**
   * Who will make payment.
   */
  responsible?: Reference | undefined;
  /**
   * A set of security labels that define which terms are controlled by this condition.
   */
  securityLabelNumber?: number[] | undefined;
  /**
   * A Contract Valued Item unit valuation measure.
   */
  unitPrice?: Money | undefined;

}