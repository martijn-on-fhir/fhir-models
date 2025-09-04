import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { ExplanationOfBenefitBenefitBalanceFinancial } from './ExplanationOfBenefitBenefitBalanceFinancial';
import { MED01 } from './MED01';

/**
 * Balance by Benefit Category.
 */
export interface ExplanationOfBenefitBenefitBalance extends BackboneElement {

  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category: CodeableConcept;
  /**
   * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
   */
  excluded?: boolean | undefined;
  _excluded?: Element | undefined;
  /**
   * Benefits Used to date.
   */
  financial?: ExplanationOfBenefitBenefitBalanceFinancial[] | undefined;
  /**
   * For example: MED01, or DENT2.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
   */
  network?: CodeableConcept | undefined;
  /**
   * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
   */
  term?: CodeableConcept | undefined;
  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  unit?: CodeableConcept | undefined;

}