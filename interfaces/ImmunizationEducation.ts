import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
export interface ImmunizationEducation extends BackboneElement {

  /**
   * Identifier of the material presented to the patient.
   */
  documentType?: string | undefined;
  _documentType?: Element | undefined;
  /**
   * Date the educational material was given to the patient.
   */
  presentationDate?: string | undefined;
  _presentationDate?: Element | undefined;
  /**
   * Date the educational material was published.
   */
  publicationDate?: string | undefined;
  _publicationDate?: Element | undefined;
  /**
   * Reference pointer to the educational material given to the patient if the information was on line.
   */
  reference?: string | undefined;
  _reference?: Element | undefined;

}