import { Age } from './Age';
import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DiagnosticReport } from './DiagnosticReport';
import { DocumentReference } from './DocumentReference';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Observation } from './Observation';
import { Period } from './Period';
import { ProcedureFocalDevice } from './ProcedureFocalDevice';
import { ProcedurePerformer } from './ProcedurePerformer';
import { Range } from './Range';
import { Reference } from './Reference';

/**
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 */
export interface Procedure extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Procedure';
  /**
   * Individual who is making the procedure statement.
   */
  asserter?: Reference | undefined;
  /**
   * A reference to a resource that contains details of the request for this procedure.
   */
  basedOn?: Reference[] | undefined;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [procedure-targetbodystructure](extension-procedure-targetbodystructure.html).
   */
  bodySite?: CodeableConcept[] | undefined;
  /**
   * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  category?: CodeableConcept | undefined;
  /**
   * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
   */
  code?: CodeableConcept | undefined;
  /**
   * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
   */
  complication?: CodeableConcept[] | undefined;
  /**
   * Any complications that occurred during the procedure, or in the immediate post-performance period.
   */
  complicationDetail?: Reference[] | undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: Reference | undefined;
  /**
   * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
   */
  focalDevice?: ProcedureFocalDevice[] | undefined;
  /**
   * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
   */
  followUp?: CodeableConcept[] | undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and Person resource instances might share the same social insurance number.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   */
  instantiatesCanonical?: string[] | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  /**
   * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
   */
  location?: Reference | undefined;
  /**
   * Any other notes and comments about the procedure.
   */
  note?: Annotation[] | undefined;
  /**
   * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
   */
  outcome?: CodeableConcept | undefined;
  /**
   * The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For example, the anesthesia MedicationAdministration is part of the surgical Procedure (MedicationAdministration.partOf = Procedure).  For example, the procedure to insert the IV port for an IV medication administration is part of the medication administration (Procedure.partOf = MedicationAdministration).
   */
  partOf?: Reference[] | undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performedDateTime?: string | undefined;
  _performedDateTime?: Element | undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performedPeriod?: Period | undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performedString?: string | undefined;
  _performedString?: Element | undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performedAge?: Age | undefined;
  /**
   * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   */
  performedRange?: Range | undefined;
  /**
   * Limited to "real" people rather than equipment.
   */
  performer?: ProcedurePerformer[] | undefined;
  /**
   * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * It is possible for a procedure to be a reason (such as C-Section) for another procedure (such as an epidural). Other examples include endoscopy for dilatation and biopsy (a combination of diagnostic and therapeutic use).
   * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: Reference | undefined;
  /**
   * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
   */
  report?: Reference[] | undefined;
  /**
   * The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('preparation'|'in-progress'|'not-done'|'on-hold'|'stopped'|'completed'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
   */
  statusReason?: CodeableConcept | undefined;
  /**
   * The person, animal or group on which the procedure was performed.
   */
  subject: Reference;
  /**
   * For devices actually implanted or removed, use Procedure.device.
   */
  usedCode?: CodeableConcept[] | undefined;
  /**
   * For devices actually implanted or removed, use Procedure.device.
   */
  usedReference?: Reference[] | undefined;

}