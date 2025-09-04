import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { ExplanationOfBenefitAccident } from './ExplanationOfBenefitAccident';
import { ExplanationOfBenefitAddItem } from './ExplanationOfBenefitAddItem';
import { ExplanationOfBenefitBenefitBalance } from './ExplanationOfBenefitBenefitBalance';
import { ExplanationOfBenefitCareTeam } from './ExplanationOfBenefitCareTeam';
import { ExplanationOfBenefitDiagnosis } from './ExplanationOfBenefitDiagnosis';
import { ExplanationOfBenefitInsurance } from './ExplanationOfBenefitInsurance';
import { ExplanationOfBenefitItem } from './ExplanationOfBenefitItem';
import { ExplanationOfBenefitItemAdjudication } from './ExplanationOfBenefitItemAdjudication';
import { ExplanationOfBenefitPayee } from './ExplanationOfBenefitPayee';
import { ExplanationOfBenefitPayment } from './ExplanationOfBenefitPayment';
import { ExplanationOfBenefitProcedure } from './ExplanationOfBenefitProcedure';
import { ExplanationOfBenefitProcessNote } from './ExplanationOfBenefitProcessNote';
import { ExplanationOfBenefitRelated } from './ExplanationOfBenefitRelated';
import { ExplanationOfBenefitSupportingInfo } from './ExplanationOfBenefitSupportingInfo';
import { ExplanationOfBenefitTotal } from './ExplanationOfBenefitTotal';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export interface ExplanationOfBenefit extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ExplanationOfBenefit';
  /**
   * Details of a accident which resulted in injuries which required the products and services listed in the claim.
   */
  accident?: ExplanationOfBenefitAccident | undefined;
  /**
   * The first-tier service adjudications for payor added product or service lines.
   */
  addItem?: ExplanationOfBenefitAddItem[] | undefined;
  /**
   * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
   */
  adjudication?: ExplanationOfBenefitItemAdjudication[] | undefined;
  /**
   * Balance by Benefit Category.
   */
  benefitBalance?: ExplanationOfBenefitBenefitBalance[] | undefined;
  /**
   * Not applicable when use=claim.
   */
  benefitPeriod?: Period | undefined;
  /**
   * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterminations. Typically line item dates of service should fall within the billing period if one is specified.
   */
  billablePeriod?: Period | undefined;
  /**
   * The members of the team who provided the products and services.
   */
  careTeam?: ExplanationOfBenefitCareTeam[] | undefined;
  /**
   * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
   */
  claim?: Reference | undefined;
  /**
   * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
   */
  claimResponse?: Reference | undefined;
  /**
   * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
   */
  created: string;
  _created?: Element | undefined;
  /**
   * Information about diagnoses relevant to the claim items.
   */
  diagnosis?: ExplanationOfBenefitDiagnosis[] | undefined;
  /**
   * A human readable description of the status of the adjudication.
   */
  disposition?: string | undefined;
  _disposition?: Element | undefined;
  /**
   * Individual who created the claim, predetermination or preauthorization.
   */
  enterer?: Reference | undefined;
  /**
   * Facility where the services were provided.
   */
  facility?: Reference | undefined;
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
   * This field is only used for preauthorizations.
   */
  fundsReserveRequested?: CodeableConcept | undefined;
  /**
   * A unique identifier assigned to this explanation of benefit.
   */
  identifier?: Identifier[] | undefined;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance: ExplanationOfBenefitInsurance[];
  /**
   * The party responsible for authorization, adjudication and reimbursement.
   */
  insurer: Reference;
  /**
   * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
   */
  item?: ExplanationOfBenefitItem[] | undefined;
  /**
   * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
   */
  originalPrescription?: Reference | undefined;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome: ('queued'|'complete'|'error'|'partial');
  _outcome?: Element | undefined;
  /**
   * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
   */
  patient: Reference;
  /**
   * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
   */
  payee?: ExplanationOfBenefitPayee | undefined;
  /**
   * Payment details for the adjudication of the claim.
   */
  payment?: ExplanationOfBenefitPayment | undefined;
  /**
   * This value is only present on preauthorization adjudications.
   */
  preAuthRef?: string[] | undefined;
  _preAuthRef?: Element[] | undefined;
  /**
   * This value is only present on preauthorization adjudications.
   */
  preAuthRefPeriod?: Period[] | undefined;
  /**
   * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
   */
  precedence?: number | undefined;
  /**
   * Prescription to support the dispensing of pharmacy, device or vision products.
   */
  prescription?: Reference | undefined;
  /**
   * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
   */
  priority?: CodeableConcept | undefined;
  /**
   * Procedures performed on the patient relevant to the billing items with the claim.
   */
  procedure?: ExplanationOfBenefitProcedure[] | undefined;
  /**
   * A note that describes or explains adjudication results in a human readable form.
   */
  processNote?: ExplanationOfBenefitProcessNote[] | undefined;
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
  related?: ExplanationOfBenefitRelated[] | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('active'|'cancelled'|'draft'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * This may contain the local bill type codes such as the US UB-04 bill type code.
   */
  subType?: CodeableConcept | undefined;
  /**
   * Often there are multiple jurisdiction specific valuesets which are required.
   */
  supportingInfo?: ExplanationOfBenefitSupportingInfo[] | undefined;
  /**
   * Totals for amounts submitted, co-pays, benefits payable etc.
   */
  total?: ExplanationOfBenefitTotal[] | undefined;
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