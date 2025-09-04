import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';
import { ImagingStudySeriesInstance } from './ImagingStudySeriesInstance';
import { ImagingStudySeriesPerformer } from './ImagingStudySeriesPerformer';
import { Reference } from './Reference';

/**
 * Each study has one or more series of images or other content.
 */
export interface ImagingStudySeries extends BackboneElement {

  /**
   * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
   */
  bodySite?: Coding | undefined;
  /**
   * A description of the series.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
   */
  endpoint?: Reference[] | undefined;
  /**
   * A single SOP instance within the series, e.g. an image, or presentation state.
   */
  instance?: ImagingStudySeriesInstance[] | undefined;
  /**
   * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
   */
  laterality?: Coding | undefined;
  /**
   * The modality of this series sequence.
   */
  modality: Coding;
  /**
   * The numeric identifier of this series in the study.
   */
  number?: number | undefined;
  /**
   * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: number | undefined;
  /**
   * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
   */
  performer?: ImagingStudySeriesPerformer[] | undefined;
  /**
   * The specimen imaged, e.g., for whole slide imaging of a biopsy.
   */
  specimen?: Reference[] | undefined;
  /**
   * The date and time the series was started.
   */
  started?: string | undefined;
  _started?: Element | undefined;
  /**
   * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
   */
  uid: string;
  _uid?: Element | undefined;

}