import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Period } from './Period';

/**
 * Product storage.
 */
export interface BiologicallyDerivedProductStorage extends BackboneElement {

  /**
   * Description of storage.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Storage timeperiod.
   */
  duration?: Period | undefined;
  /**
   * Temperature scale used.
   */
  scale?: ('farenheit'|'celsius'|'kelvin') | undefined;
  _scale?: Element | undefined;
  /**
   * Storage temperature.
   */
  temperature?: number | undefined;

}