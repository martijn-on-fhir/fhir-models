import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * How this product was collected.
 */
export interface BiologicallyDerivedProductCollection extends BackboneElement {

  /**
   * Time of product collection.
   */
  collectedDateTime?: string | undefined;
  _collectedDateTime?: Element | undefined;
  /**
   * Time of product collection.
   */
  collectedPeriod?: Period | undefined;
  /**
   * Healthcare professional who is performing the collection.
   */
  collector?: Reference | undefined;
  /**
   * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
   */
  source?: Reference | undefined;

}