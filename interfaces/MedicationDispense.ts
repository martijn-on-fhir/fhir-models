import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Dosage } from './Dosage';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MedicationDispensePerformer } from './MedicationDispensePerformer';
import { MedicationDispenseSubstitution } from './MedicationDispenseSubstitution';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export interface MedicationDispense extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicationDispense';
  /**
   * Maps to basedOn in Event logical model.
   */
  authorizingPrescription?: Reference[] | undefined;
  /**
   * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
   */
  category?: CodeableConcept | undefined;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  context?: Reference | undefined;
  /**
   * The amount of medication expressed as a timing amount.
   */
  daysSupply?: Quantity | undefined;
  /**
   * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
   */
  destination?: Reference | undefined;
  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
   */
  detectedIssue?: Reference[] | undefined;
  /**
   * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
   * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
   */
  dosageInstruction?: Dosage[] | undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
   */
  eventHistory?: Reference[] | undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The principal physical location where the dispense was performed.
   */
  location?: Reference | undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: CodeableConcept | undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationReference?: Reference | undefined;
  /**
   * Extra information about the dispense that could not be conveyed in the other attributes.
   */
  note?: Annotation[] | undefined;
  /**
   * The procedure that trigger the dispense.
   */
  partOf?: Reference[] | undefined;
  /**
   * Indicates who or what performed the event.
   */
  performer?: MedicationDispensePerformer[] | undefined;
  /**
   * The amount of medication that has been dispensed. Includes unit of measure.
   */
  quantity?: Quantity | undefined;
  /**
   * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
   */
  receiver?: Reference[] | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('preparation'|'in-progress'|'cancelled'|'on-hold'|'completed'|'entered-in-error'|'stopped'|'declined'|'unknown');
  _status?: Element | undefined;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  statusReasonCodeableConcept?: CodeableConcept | undefined;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  statusReasonReference?: Reference | undefined;
  /**
   * SubstanceAdministration->subject->Patient.
   */
  subject?: Reference | undefined;
  /**
   * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
   */
  substitution?: MedicationDispenseSubstitution | undefined;
  /**
   * Additional information that supports the medication being dispensed.
   */
  supportingInformation?: Reference[] | undefined;
  /**
   * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: CodeableConcept | undefined;
  /**
   * The time the dispensed product was provided to the patient or their representative.
   */
  whenHandedOver?: string | undefined;
  _whenHandedOver?: Element | undefined;
  /**
   * The time when the dispensed product was packaged and reviewed.
   */
  whenPrepared?: string | undefined;
  _whenPrepared?: Element | undefined;

}