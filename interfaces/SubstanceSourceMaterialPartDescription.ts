import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * To do.
 */
export interface SubstanceSourceMaterialPartDescription extends BackboneElement {

  /**
   * Entity of anatomical origin of source material within an organism.
   */
  part?: CodeableConcept | undefined;
  /**
   * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply.
   */
  partLocation?: CodeableConcept | undefined;

}