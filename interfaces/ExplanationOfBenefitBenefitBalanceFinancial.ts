import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Money } from './Money';

/**
 * Benefits Used to date.
 */
export interface ExplanationOfBenefitBenefitBalanceFinancial extends BackboneElement {

  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedUnsignedInt?: number | undefined;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedString?: string | undefined;
  _allowedString?: Element | undefined;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedMoney?: Money | undefined;
  /**
   * For example: deductible, visits, benefit amount.
   */
  type: CodeableConcept;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedUnsignedInt?: number | undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedMoney?: Money | undefined;

}