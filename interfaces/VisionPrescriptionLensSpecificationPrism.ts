import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Allows for adjustment on two axis.
 */
export interface VisionPrescriptionLensSpecificationPrism extends BackboneElement {

  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  amount: number;
  /**
   * The relative base, or reference lens edge, for the prism.
   */
  base: ('up'|'down'|'in'|'out');
  _base?: Element | undefined;

}