import { Array } from './Array';
import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export interface HealthcareServiceAvailableTime extends BackboneElement {

  /**
   * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
   */
  allDay?: boolean | undefined;
  _allDay?: Element | undefined;
  /**
   * The time zone is expected to be for where this HealthcareService is provided at.
   */
  availableEndTime?: string | undefined;
  _availableEndTime?: Element | undefined;
  /**
   * The time zone is expected to be for where this HealthcareService is provided at.
   */
  availableStartTime?: string | undefined;
  _availableStartTime?: Element | undefined;
  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  daysOfWeek?: Array<'mon'|'tue'|'wed'|'thu'|'fri'|'sat'|'sun'> | undefined;
  _daysOfWeek?: Element[] | undefined;

}