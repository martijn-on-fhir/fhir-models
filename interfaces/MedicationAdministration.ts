import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MedicationAdministrationDosage } from './MedicationAdministrationDosage';
import { MedicationAdministrationPerformer } from './MedicationAdministrationPerformer';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export interface MedicationAdministration extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicationAdministration';
  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  category?: CodeableConcept | undefined;
  /**
   * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
   */
  context?: Reference | undefined;
  /**
   * The device used in administering the medication to the patient.  For example, a particular infusion pump.
   */
  device?: Reference[] | undefined;
  /**
   * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
   */
  dosage?: MedicationAdministrationDosage | undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectiveDateTime?: string | undefined;
  _effectiveDateTime?: Element | undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectivePeriod?: Period | undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
   */
  eventHistory?: Reference[] | undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: Identifier[] | undefined;
  /**
   * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
   */
  instantiates?: string[] | undefined;
  _instantiates?: Element[] | undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: CodeableConcept | undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationReference?: Reference | undefined;
  /**
   * Extra information about the medication administration that is not conveyed by the other attributes.
   */
  note?: Annotation[] | undefined;
  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: Reference[] | undefined;
  /**
   * Indicates who or what performed the medication administration and how they were involved.
   */
  performer?: MedicationAdministrationPerformer[] | undefined;
  /**
   * A code indicating why the medication was given.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
   */
  request?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('in-progress'|'not-done'|'on-hold'|'completed'|'entered-in-error'|'stopped'|'unknown');
  _status?: Element | undefined;
  /**
   * A code indicating why the administration was not performed.
   */
  statusReason?: CodeableConcept[] | undefined;
  /**
   * The person or animal or group receiving the medication.
   */
  subject: Reference;
  /**
   * Additional information (for example, patient height and weight) that supports the administration of the medication.
   */
  supportingInformation?: Reference[] | undefined;

}