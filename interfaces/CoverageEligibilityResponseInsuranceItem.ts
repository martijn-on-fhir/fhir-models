import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { CoverageEligibilityResponseInsuranceItemBenefit } from './CoverageEligibilityResponseInsuranceItemBenefit';
import { Element } from './Element';
import { MED01 } from './MED01';
import { Reference } from './Reference';

/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export interface CoverageEligibilityResponseInsuranceItem extends BackboneElement {

  /**
   * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
   */
  authorizationRequired?: boolean | undefined;
  _authorizationRequired?: Element | undefined;
  /**
   * Codes or comments regarding information or actions associated with the preauthorization.
   */
  authorizationSupporting?: CodeableConcept[] | undefined;
  /**
   * A web location for obtaining requirements or descriptive information regarding the preauthorization.
   */
  authorizationUrl?: string | undefined;
  _authorizationUrl?: Element | undefined;
  /**
   * Benefits used to date.
   */
  benefit?: CoverageEligibilityResponseInsuranceItemBenefit[] | undefined;
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: CodeableConcept | undefined;
  /**
   * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
   */
  excluded?: boolean | undefined;
  _excluded?: Element | undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  modifier?: CodeableConcept[] | undefined;
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
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
   */
  productOrService?: CodeableConcept | undefined;
  /**
   * The practitioner who is eligible for the provision of the product or service.
   */
  provider?: Reference | undefined;
  /**
   * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
   */
  term?: CodeableConcept | undefined;
  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  unit?: CodeableConcept | undefined;

}