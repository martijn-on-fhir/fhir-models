import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Information that only applies to packages (not products).
 */
export interface MedicationBatch extends BackboneElement {

  /**
   * When this specific batch of product will expire.
   */
  expirationDate?: string | undefined;
  _expirationDate?: Element | undefined;
  /**
   * The assigned lot number of a batch of the specified product.
   */
  lotNumber?: string | undefined;
  _lotNumber?: Element | undefined;

}