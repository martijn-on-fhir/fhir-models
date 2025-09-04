import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface ClaimResponseInsurance extends BackboneElement {

  /**
   * A business agreement number established between the provider and the insurer for special business processing purposes.
   */
  businessArrangement?: string | undefined;
  _businessArrangement?: Element | undefined;
  /**
   * Must not be specified when 'focal=true' for this insurance.
   */
  claimResponse?: Reference | undefined;
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  coverage: Reference;
  /**
   * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
   */
  focal: boolean;
  _focal?: Element | undefined;
  /**
   * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
   */
  sequence: number;

}