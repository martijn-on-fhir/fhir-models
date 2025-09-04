import { BackboneElement } from './BackboneElement';

/**
 * Structural variant outer.
 */
export interface MolecularSequenceStructureVariantOuter extends BackboneElement {

  /**
   * Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   */
  end?: number | undefined;
  /**
   * Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  start?: number | undefined;

}