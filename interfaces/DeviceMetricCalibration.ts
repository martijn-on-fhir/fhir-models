import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export interface DeviceMetricCalibration extends BackboneElement {

  /**
   * Describes the state of the calibration.
   */
  state?: ('not-calibrated'|'calibration-required'|'calibrated'|'unspecified') | undefined;
  _state?: Element | undefined;
  /**
   * Describes the time last calibration has been performed.
   */
  time?: string | undefined;
  _time?: Element | undefined;
  /**
   * Describes the type of the calibration method.
   */
  type?: ('unspecified'|'offset'|'gain'|'two-point') | undefined;
  _type?: Element | undefined;

}