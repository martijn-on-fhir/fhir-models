import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Ratio } from './Ratio';
import { Reference } from './Reference';

/**
 * Identifies a particular constituent of interest in the product.
 */
export interface MedicationKnowledgeIngredient extends BackboneElement {

  /**
   * Indication of whether this ingredient affects the therapeutic action of the drug.
   */
  isActive?: boolean | undefined;
  _isActive?: Element | undefined;
  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication.
   */
  itemCodeableConcept?: CodeableConcept | undefined;
  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication.
   */
  itemReference?: Reference | undefined;
  /**
   * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
   */
  strength?: Ratio | undefined;

}