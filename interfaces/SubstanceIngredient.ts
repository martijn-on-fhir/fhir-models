import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Ratio } from './Ratio';
import { Reference } from './Reference';

/**
 * A substance can be composed of other substances.
 */
export interface SubstanceIngredient extends BackboneElement {

  /**
   * The amount of the ingredient in the substance - a concentration ratio.
   */
  quantity?: Ratio | undefined;
  /**
   * Another substance that is a component of this substance.
   */
  substanceCodeableConcept?: CodeableConcept | undefined;
  /**
   * Another substance that is a component of this substance.
   */
  substanceReference?: Reference | undefined;

}