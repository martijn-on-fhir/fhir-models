import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * Details of the official nature of this name.
 */
export interface SubstanceSpecificationNameOfficial extends BackboneElement {

  /**
   * Which authority uses this official name.
   */
  authority?: CodeableConcept | undefined;
  /**
   * Date of official name change.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * The status of the official name.
   */
  status?: CodeableConcept | undefined;

}