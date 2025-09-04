import { BackboneElement } from './BackboneElement';
import { CoverageEligibilityResponseInsuranceItem } from './CoverageEligibilityResponseInsuranceItem';
import { Element } from './Element';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface CoverageEligibilityResponseInsurance extends BackboneElement {

  /**
   * The term of the benefits documented in this response.
   */
  benefitPeriod?: Period | undefined;
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  coverage: Reference;
  /**
   * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
   */
  inforce?: boolean | undefined;
  _inforce?: Element | undefined;
  /**
   * Benefits and optionally current balances, and authorization details by category or service.
   */
  item?: CoverageEligibilityResponseInsuranceItem[] | undefined;

}