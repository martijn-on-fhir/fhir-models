import { Array } from './Array';
import { CodeableConcept } from './CodeableConcept';
import { CoverageEligibilityRequestInsurance } from './CoverageEligibilityRequestInsurance';
import { CoverageEligibilityRequestItem } from './CoverageEligibilityRequestItem';
import { CoverageEligibilityRequestSupportingInfo } from './CoverageEligibilityRequestSupportingInfo';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export interface CoverageEligibilityRequest extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'CoverageEligibilityRequest';
  /**
   * The date when this resource was created.
   */
  created: string;
  _created?: Element | undefined;
  /**
   * Person who created the request.
   */
  enterer?: Reference | undefined;
  /**
   * Facility where the services are intended to be provided.
   */
  facility?: Reference | undefined;
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: Identifier[] | undefined;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance?: CoverageEligibilityRequestInsurance[] | undefined;
  /**
   * The Insurer who issued the coverage in question and is the recipient of the request.
   */
  insurer: Reference;
  /**
   * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
   */
  item?: CoverageEligibilityRequestItem[] | undefined;
  /**
   * 1..1.
   */
  patient: Reference;
  /**
   * When the requestor expects the processor to complete processing.
   */
  priority?: CodeableConcept | undefined;
  /**
   * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  provider?: Reference | undefined;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  purpose: Array<'auth-requirements'|'benefits'|'discovery'|'validation'>;
  _purpose?: Element[] | undefined;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedDate?: string | undefined;
  _servicedDate?: Element | undefined;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedPeriod?: Period | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('active'|'cancelled'|'draft'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * Often there are multiple jurisdiction specific valuesets which are required.
   */
  supportingInfo?: CoverageEligibilityRequestSupportingInfo[] | undefined;

}