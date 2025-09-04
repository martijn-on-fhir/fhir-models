import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';
import { SpecimenCollection } from './SpecimenCollection';
import { SpecimenContainer } from './SpecimenContainer';
import { SpecimenProcessing } from './SpecimenProcessing';

/**
 * A sample to be used for analysis.
 */
export interface Specimen extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Specimen';
  /**
   * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
   */
  accessionIdentifier?: Identifier | undefined;
  /**
   * Details concerning the specimen collection.
   */
  collection?: SpecimenCollection | undefined;
  /**
   * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
   */
  condition?: CodeableConcept[] | undefined;
  /**
   * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
   */
  container?: SpecimenContainer[] | undefined;
  /**
   * Id for specimen.
   */
  identifier?: Identifier[] | undefined;
  /**
   * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
   */
  note?: Annotation[] | undefined;
  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   */
  parent?: Reference[] | undefined;
  /**
   * Details concerning processing and processing steps for the specimen.
   */
  processing?: SpecimenProcessing[] | undefined;
  /**
   * Time when specimen was received for processing or testing.
   */
  receivedTime?: string | undefined;
  _receivedTime?: Element | undefined;
  /**
   * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
   */
  request?: Reference[] | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: ('available'|'unavailable'|'unsatisfactory'|'entered-in-error') | undefined;
  _status?: Element | undefined;
  /**
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
   */
  subject?: Reference | undefined;
  /**
   * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
   */
  type?: CodeableConcept | undefined;

}