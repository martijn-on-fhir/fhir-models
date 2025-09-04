import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';

/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export interface ImagingStudySeriesInstance extends BackboneElement {

  /**
   * The number of instance in the series.
   */
  number?: number | undefined;
  /**
   * DICOM instance  type.
   */
  sopClass: Coding;
  /**
   * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
   */
  uid: string;
  _uid?: Element | undefined;

}