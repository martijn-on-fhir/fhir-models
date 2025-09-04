import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { ImmunizationEducation } from './ImmunizationEducation';
import { ImmunizationPerformer } from './ImmunizationPerformer';
import { ImmunizationProtocolApplied } from './ImmunizationProtocolApplied';
import { ImmunizationReaction } from './ImmunizationReaction';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export interface Immunization extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Immunization';
  /**
   * The quantity of vaccine product that was administered.
   */
  doseQuantity?: Quantity | undefined;
  /**
   * Educational material presented to the patient (or guardian) at the time of vaccine administration.
   */
  education?: ImmunizationEducation[] | undefined;
  /**
   * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
   */
  encounter?: Reference | undefined;
  /**
   * Date vaccine batch expires.
   */
  expirationDate?: string | undefined;
  _expirationDate?: Element | undefined;
  /**
   * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
   */
  fundingSource?: CodeableConcept | undefined;
  /**
   * A unique identifier assigned to this immunization record.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
   */
  isSubpotent?: boolean | undefined;
  _isSubpotent?: Element | undefined;
  /**
   * The service delivery location where the vaccine administration occurred.
   */
  location?: Reference | undefined;
  /**
   * Lot number of the  vaccine product.
   */
  lotNumber?: string | undefined;
  _lotNumber?: Element | undefined;
  /**
   * Name of vaccine manufacturer.
   */
  manufacturer?: Reference | undefined;
  /**
   * Extra information about the immunization that is not conveyed by the other attributes.
   */
  note?: Annotation[] | undefined;
  /**
   * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
   */
  occurrenceDateTime?: string | undefined;
  _occurrenceDateTime?: Element | undefined;
  /**
   * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
   */
  occurrenceString?: string | undefined;
  _occurrenceString?: Element | undefined;
  /**
   * The patient who either received or did not receive the immunization.
   */
  patient: Reference;
  /**
   * Indicates who performed the immunization event.
   */
  performer?: ImmunizationPerformer[] | undefined;
  /**
   * Reflects the “reliability” of the content.
   */
  primarySource?: boolean | undefined;
  _primarySource?: Element | undefined;
  /**
   * Indicates a patient's eligibility for a funding program.
   */
  programEligibility?: CodeableConcept[] | undefined;
  /**
   * The protocol (set of recommendations) being followed by the provider who administered the dose.
   */
  protocolApplied?: ImmunizationProtocolApplied[] | undefined;
  /**
   * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
   */
  reaction?: ImmunizationReaction[] | undefined;
  /**
   * Reasons why the vaccine was administered.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
   */
  recorded?: string | undefined;
  _recorded?: Element | undefined;
  /**
   * Should not be populated if primarySource = True, not required even if primarySource = False.
   */
  reportOrigin?: CodeableConcept | undefined;
  /**
   * The path by which the vaccine product is taken into the body.
   */
  route?: CodeableConcept | undefined;
  /**
   * Body site where vaccine was administered.
   */
  site?: CodeableConcept | undefined;
  /**
   * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('completed'|'entered-in-error'|'not-done');
  _status?: Element | undefined;
  /**
   * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
   */
  statusReason?: CodeableConcept | undefined;
  /**
   * Reason why a dose is considered to be subpotent.
   */
  subpotentReason?: CodeableConcept[] | undefined;
  /**
   * Vaccine that was administered or was to be administered.
   */
  vaccineCode: CodeableConcept;

}