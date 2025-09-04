import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Ratio } from './Ratio';
import { Reference } from './Reference';

/**
 * A link between this substance and another, with details of the relationship.
 */
export interface SubstanceSpecificationRelationship extends BackboneElement {

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
   */
  amountQuantity?: Quantity | undefined;
  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
   */
  amountRange?: Range | undefined;
  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
   */
  amountRatio?: Ratio | undefined;
  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
   */
  amountString?: string | undefined;
  _amountString?: Element | undefined;
  /**
   * For use when the numeric.
   */
  amountRatioLowLimit?: Ratio | undefined;
  /**
   * An operator for the amount, for example "average", "approximately", "less than".
   */
  amountType?: CodeableConcept | undefined;
  /**
   * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
   */
  isDefining?: boolean | undefined;
  _isDefining?: Element | undefined;
  /**
   * For example "salt to parent", "active moiety", "starting material".
   */
  relationship?: CodeableConcept | undefined;
  /**
   * Supporting literature.
   */
  source?: Reference[] | undefined;
  /**
   * A pointer to another substance, as a resource or just a representational code.
   */
  substanceReference?: Reference | undefined;
  /**
   * A pointer to another substance, as a resource or just a representational code.
   */
  substanceCodeableConcept?: CodeableConcept | undefined;

}