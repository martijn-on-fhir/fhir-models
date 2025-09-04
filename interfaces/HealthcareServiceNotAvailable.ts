import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Period } from './Period';

/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export interface HealthcareServiceNotAvailable extends BackboneElement {

  /**
   * The reason that can be presented to the user as to why this time is not available.
   */
  description: string;
  _description?: Element | undefined;
  /**
   * Service is not available (seasonally or for a public holiday) from this date.
   */
  during?: Period | undefined;

}