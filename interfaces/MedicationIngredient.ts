import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Ratio } from './Ratio';
import { Reference } from './Reference';

/**
 * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
 */
export interface MedicationIngredient extends BackboneElement {

  /**
   * Indication of whether this ingredient affects the therapeutic action of the drug.
   */
  isActive?: boolean | undefined;
  _isActive?: Element | undefined;
  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  itemCodeableConcept?: CodeableConcept | undefined;
  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  itemReference?: Reference | undefined;
  /**
   * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
   */
  strength?: Ratio | undefined;

}