import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { InsurancePlanCoverageBenefitLimit } from './InsurancePlanCoverageBenefitLimit';

/**
 * Specific benefits under this type of coverage.
 */
export interface InsurancePlanCoverageBenefit extends BackboneElement {

  /**
   * The specific limits on the benefit.
   */
  limit?: InsurancePlanCoverageBenefitLimit[] | undefined;
  /**
   * The referral requirements to have access/coverage for this benefit.
   */
  requirement?: string | undefined;
  _requirement?: Element | undefined;
  /**
   * Type of benefit (primary care; speciality care; inpatient; outpatient).
   */
  type: CodeableConcept;

}