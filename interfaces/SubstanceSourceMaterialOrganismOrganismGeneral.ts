import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * 4.9.13.7.1 Kingdom (Conditional).
 */
export interface SubstanceSourceMaterialOrganismOrganismGeneral extends BackboneElement {

  /**
   * The class of an organism shall be specified.
   */
  class?: CodeableConcept | undefined;
  /**
   * The kingdom of an organism shall be specified.
   */
  kingdom?: CodeableConcept | undefined;
  /**
   * The order of an organism shall be specified,.
   */
  order?: CodeableConcept | undefined;
  /**
   * The phylum of an organism shall be specified.
   */
  phylum?: CodeableConcept | undefined;

}