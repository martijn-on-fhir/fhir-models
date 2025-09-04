import { BackboneElement } from './BackboneElement';
import { Identifier } from './Identifier';

/**
 * Batch numbering.
 */
export interface MedicinalProductPackagedBatchIdentifier extends BackboneElement {

  /**
   * A number appearing on the immediate packaging (and not the outer packaging).
   */
  immediatePackaging?: Identifier | undefined;
  /**
   * A number appearing on the outer packaging of a specific batch.
   */
  outerPackaging: Identifier;

}