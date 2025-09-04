import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';
import { Timing } from './Timing';

/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export interface DeviceUseStatement extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'DeviceUseStatement';
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
   */
  basedOn?: Reference[] | undefined;
  /**
   * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
   */
  bodySite?: CodeableConcept | undefined;
  /**
   * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUseStatement from.
   */
  derivedFrom?: Reference[] | undefined;
  /**
   * The details of the device used.
   */
  device: Reference;
  /**
   * An external identifier for this statement such as an IRI.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  note?: Annotation[] | undefined;
  /**
   * Reason or justification for the use of the device.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Indicates another resource whose existence justifies this DeviceUseStatement.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The time at which the statement was made/recorded.
   */
  recordedOn?: string | undefined;
  _recordedOn?: Element | undefined;
  /**
   * Who reported the device was being used by the patient.
   */
  source?: Reference | undefined;
  /**
   * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
   * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
   */
  status: ('active'|'completed'|'entered-in-error'|'intended'|'stopped'|'on-hold');
  _status?: Element | undefined;
  /**
   * The patient who used the device.
   */
  subject: Reference;
  /**
   * How often the device was used.
   */
  timingTiming?: Timing | undefined;
  /**
   * How often the device was used.
   */
  timingPeriod?: Period | undefined;
  /**
   * How often the device was used.
   */
  timingDateTime?: string | undefined;
  _timingDateTime?: Element | undefined;

}