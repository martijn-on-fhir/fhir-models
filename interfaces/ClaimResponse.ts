import { Attachment } from './Attachment';
import { ClaimResponseAddItem } from './ClaimResponseAddItem';
import { ClaimResponseError } from './ClaimResponseError';
import { ClaimResponseInsurance } from './ClaimResponseInsurance';
import { ClaimResponseItem } from './ClaimResponseItem';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { ClaimResponsePayment } from './ClaimResponsePayment';
import { ClaimResponseProcessNote } from './ClaimResponseProcessNote';
import { ClaimResponseTotal } from './ClaimResponseTotal';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponse extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ClaimResponse';
  /**
   * The first-tier service adjudications for payor added product or service lines.
   */
  addItem?: ClaimResponseAddItem[] | undefined;
  /**
   * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
   */
  adjudication?: ClaimResponseItemAdjudication[] | undefined;
  /**
   * For example: professional reports, documents, images, clinical resources, or accident reports.
   */
  communicationRequest?: Reference[] | undefined;
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
   * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
   */
  error?: ClaimResponseError[] | undefined;
  /**
   * Needed to permit insurers to include the actual form.
   */
  form?: Attachment | undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  formCode?: CodeableConcept | undefined;
  /**
   * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
   */
  fundsReserve?: CodeableConcept | undefined;
  /**
   * A unique identifier assigned to this claim response.
   */
  identifier?: Identifier[] | undefined;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance?: ClaimResponseInsurance[] | undefined;
  /**
   * The party responsible for authorization, adjudication and reimbursement.
   */
  insurer: Reference;
  /**
   * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
   */
  item?: ClaimResponseItem[] | undefined;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome: ('queued'|'complete'|'error'|'partial');
  _outcome?: Element | undefined;
  /**
   * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
   */
  patient: Reference;
  /**
   * Type of Party to be reimbursed: subscriber, provider, other.
   */
  payeeType?: CodeableConcept | undefined;
  /**
   * Payment details for the adjudication of the claim.
   */
  payment?: ClaimResponsePayment | undefined;
  /**
   * The time frame during which this authorization is effective.
   */
  preAuthPeriod?: Period | undefined;
  /**
   * This value is only present on preauthorization adjudications.
   */
  preAuthRef?: string | undefined;
  _preAuthRef?: Element | undefined;
  /**
   * A note that describes or explains adjudication results in a human readable form.
   */
  processNote?: ClaimResponseProcessNote[] | undefined;
  /**
   * Original request resource reference.
   */
  request?: Reference | undefined;
  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  requestor?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('active'|'cancelled'|'draft'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
   */
  subType?: CodeableConcept | undefined;
  /**
   * Totals for amounts submitted, co-pays, benefits payable etc.
   */
  total?: ClaimResponseTotal[] | undefined;
  /**
   * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
   */
  type: CodeableConcept;
  /**
   * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
   */
  use: ('claim'|'preauthorization'|'predetermination');
  _use?: Element | undefined;

}