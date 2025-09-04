import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export interface DiagnosticReportMedia extends BackboneElement {

  /**
   * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * Reference to the image source.
   */
  link: Reference;

}