import { ClaimAccident } from './ClaimAccident';
import { ClaimCareTeam } from './ClaimCareTeam';
import { ClaimDiagnosis } from './ClaimDiagnosis';
import { ClaimInsurance } from './ClaimInsurance';
import { ClaimItem } from './ClaimItem';
import { ClaimPayee } from './ClaimPayee';
import { ClaimProcedure } from './ClaimProcedure';
import { ClaimRelated } from './ClaimRelated';
import { ClaimSupportingInfo } from './ClaimSupportingInfo';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Money } from './Money';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface Claim extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Claim';
  /**
   * Details of an accident which resulted in injuries which required the products and services listed in the claim.
   */
  accident?: ClaimAccident | undefined;
  /**
   * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterminations. Typically line item dates of service should fall within the billing period if one is specified.
   */
  billablePeriod?: Period | undefined;
  /**
   * The members of the team who provided the products and services.
   */
  careTeam?: ClaimCareTeam[] | undefined;
  /**
   * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
   */
  created: string;
  _created?: Element | undefined;
  /**
   * Information about diagnoses relevant to the claim items.
   */
  diagnosis?: ClaimDiagnosis[] | undefined;
  /**
   * Individual who created the claim, predetermination or preauthorization.
   */
  enterer?: Reference | undefined;
  /**
   * Facility where the services were provided.
   */
  facility?: Reference | undefined;
  /**
   * This field is only used for preauthorizations.
   */
  fundsReserve?: CodeableConcept | undefined;
  /**
   * A unique identifier assigned to this claim.
   */
  identifier?: Identifier[] | undefined;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance: ClaimInsurance[];
  /**
   * The Insurer who is target of the request.
   */
  insurer?: Reference | undefined;
  /**
   * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
   */
  item?: ClaimItem[] | undefined;
  /**
   * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefore issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
   */
  originalPrescription?: Reference | undefined;
  /**
   * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
   */
  patient: Reference;
  /**
   * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
   */
  payee?: ClaimPayee | undefined;
  /**
   * Prescription to support the dispensing of pharmacy, device or vision products.
   */
  prescription?: Reference | undefined;
  /**
   * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
   */
  priority: CodeableConcept;
  /**
   * Procedures performed on the patient relevant to the billing items with the claim.
   */
  procedure?: ClaimProcedure[] | undefined;
  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  provider: Reference;
  /**
   * The referral resource which lists the date, practitioner, reason and other supporting information.
   */
  referral?: Reference | undefined;
  /**
   * For example,  for the original treatment and follow-up exams.
   */
  related?: ClaimRelated[] | undefined;
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
   * Often there are multiple jurisdiction specific valuesets which are required.
   */
  supportingInfo?: ClaimSupportingInfo[] | undefined;
  /**
   * The total value of the all the items in the claim.
   */
  total?: Money | undefined;
  /**
   * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
   */
  type: CodeableConcept;
  /**
   * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
   */
  use: ('claim'|'preauthorization'|'predetermination');
  _use?: Element | undefined;

}