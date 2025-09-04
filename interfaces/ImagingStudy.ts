import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { ImagingStudySeries } from './ImagingStudySeries';
import { Reference } from './Reference';

/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export interface ImagingStudy extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ImagingStudy';
  /**
   * A list of the diagnostic requests that resulted in this imaging study being performed.
   */
  basedOn?: Reference[] | undefined;
  /**
   * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
   */
  encounter?: Reference | undefined;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
   */
  endpoint?: Reference[] | undefined;
  /**
   * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Who read the study and interpreted the images or other content.
   */
  interpreter?: Reference[] | undefined;
  /**
   * The principal physical location where the ImagingStudy was performed.
   */
  location?: Reference | undefined;
  /**
   * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  modality?: Coding[] | undefined;
  /**
   * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
   */
  note?: Annotation[] | undefined;
  /**
   * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: number | undefined;
  /**
   * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
   */
  numberOfSeries?: number | undefined;
  /**
   * The code for the performed procedure type.
   */
  procedureCode?: CodeableConcept[] | undefined;
  /**
   * The procedure which this ImagingStudy was part of.
   */
  procedureReference?: Reference | undefined;
  /**
   * Description of clinical condition indicating why the ImagingStudy was requested.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Indicates another resource whose existence justifies this Study.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The requesting/referring physician.
   */
  referrer?: Reference | undefined;
  /**
   * Each study has one or more series of images or other content.
   */
  series?: ImagingStudySeries[] | undefined;
  /**
   * Date and time the study started.
   */
  started?: string | undefined;
  _started?: Element | undefined;
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  status: ('registered'|'available'|'cancelled'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
   */
  subject: Reference;

}