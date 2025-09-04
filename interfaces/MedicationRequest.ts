import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Dosage } from './Dosage';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MedicationRequestDispenseRequest } from './MedicationRequestDispenseRequest';
import { MedicationRequestSubstitution } from './MedicationRequestSubstitution';
import { Reference } from './Reference';

/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 */
export interface MedicationRequest extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicationRequest';
  /**
   * The date (and perhaps time) when the prescription was initially written or authored on.
   */
  authoredOn?: string | undefined;
  _authoredOn?: Element | undefined;
  /**
   * A plan or request that is fulfilled in whole or in part by this medication request.
   */
  basedOn?: Reference[] | undefined;
  /**
   * The category can be used to include where the medication is expected to be consumed or other types of requests.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * This attribute should not be confused with the protocol of the medication.
   */
  courseOfTherapyType?: CodeableConcept | undefined;
  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
   */
  detectedIssue?: Reference[] | undefined;
  /**
   * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
   */
  dispenseRequest?: MedicationRequestDispenseRequest | undefined;
  /**
   * If do not perform is not specified, the request is a positive request e.g. "do perform".
   */
  doNotPerform?: boolean | undefined;
  _doNotPerform?: Element | undefined;
  /**
   * There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular dose.  For example, "Ondansetron 8mg orally or IV twice a day as needed for nausea" or "Compazine® (prochlorperazine) 5-10mg PO or 25mg PR bid prn nausea or vomiting".  In these cases, two medication requests would be created that could be grouped together.  The decision on which dose and route of administration to use is based on the patient's condition at the time the dose is needed.
   */
  dosageInstruction?: Dosage[] | undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter."    If there is a need to link to episodes of care they will be handled with an extension.
   */
  encounter?: Reference | undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
   */
  eventHistory?: Reference[] | undefined;
  /**
   * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
   */
  groupIdentifier?: Identifier | undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.
   */
  instantiatesCanonical?: string[] | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  /**
   * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.
   */
  instantiatesUri?: string[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  insurance?: Reference[] | undefined;
  /**
   * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.
   * An instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record.
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  intent: ('proposal'|'plan'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');
  _intent?: Element | undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: CodeableConcept | undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
   */
  medicationReference?: Reference | undefined;
  /**
   * Extra information about the prescription that could not be conveyed by the other attributes.
   */
  note?: Annotation[] | undefined;
  /**
   * The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
   */
  performer?: Reference | undefined;
  /**
   * If specified without indicating a performer, this indicates that the performer must be of the specified type. If specified with a performer then it indicates the requirements of the performer if the designated performer is not available.
   */
  performerType?: CodeableConcept | undefined;
  /**
   * Indicates how quickly the Medication Request should be addressed with respect to other requests.
   */
  priority?: ('routine'|'urgent'|'asap'|'stat') | undefined;
  _priority?: Element | undefined;
  /**
   * A link to a resource representing an earlier order related order or prescription.
   */
  priorPrescription?: Reference | undefined;
  /**
   * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonReference.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
   */
  recorder?: Reference | undefined;
  /**
   * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
   */
  reportedBoolean?: boolean | undefined;
  _reportedBoolean?: Element | undefined;
  /**
   * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
   */
  reportedReference?: Reference | undefined;
  /**
   * The individual, organization, or device that initiated the request and has responsibility for its activation.
   */
  requester?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('active'|'on-hold'|'cancelled'|'completed'|'entered-in-error'|'stopped'|'draft'|'unknown');
  _status?: Element | undefined;
  /**
   * This is generally only used for "exception" statuses such as "suspended" or "cancelled". The reason why the MedicationRequest was created at all is captured in reasonCode, not here.
   */
  statusReason?: CodeableConcept | undefined;
  /**
   * The subject on a medication request is mandatory.  For the secondary use case where the actual subject is not provided, there still must be an anonymized subject specified.
   */
  subject: Reference;
  /**
   * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
   */
  substitution?: MedicationRequestSubstitution | undefined;
  /**
   * Include additional information (for example, patient height and weight) that supports the ordering of the medication.
   */
  supportingInformation?: Reference[] | undefined;

}