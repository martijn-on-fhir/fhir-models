import { Array } from './Array';
import { CodeableConcept } from './CodeableConcept';
import { CoverageEligibilityResponseError } from './CoverageEligibilityResponseError';
import { CoverageEligibilityResponseInsurance } from './CoverageEligibilityResponseInsurance';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export interface CoverageEligibilityResponse extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'CoverageEligibilityResponse';
  /**
   * The date this resource was created.
   */
  created: string;
  _created?: Element | undefined;
  /**
   * A human readable description of the status of the adjudication.
   */
  disposition?: string | undefined;
  _disposition?: Element | undefined;
  /**
   * Errors encountered during the processing of the request.
   */
  error?: CoverageEligibilityResponseError[] | undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  form?: CodeableConcept | undefined;
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: Identifier[] | undefined;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance?: CoverageEligibilityResponseInsurance[] | undefined;
  /**
   * The Insurer who issued the coverage in question and is the author of the response.
   */
  insurer: Reference;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome: ('queued'|'complete'|'error'|'partial');
  _outcome?: Element | undefined;
  /**
   * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   */
  patient: Reference;
  /**
   * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
   */
  preAuthRef?: string | undefined;
  _preAuthRef?: Element | undefined;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  purpose: Array<'auth-requirements'|'benefits'|'discovery'|'validation'>;
  _purpose?: Element[] | undefined;
  /**
   * Reference to the original request resource.
   */
  request: Reference;
  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  requestor?: Reference | undefined;
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

}