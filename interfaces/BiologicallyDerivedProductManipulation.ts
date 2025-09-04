import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Period } from './Period';

/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export interface BiologicallyDerivedProductManipulation extends BackboneElement {

  /**
   * Description of manipulation.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Time of manipulation.
   */
  timeDateTime?: string | undefined;
  _timeDateTime?: Element | undefined;
  /**
   * Time of manipulation.
   */
  timePeriod?: Period | undefined;

}