import { ContactPoint } from './ContactPoint';
import { Element } from './Element';

/**
 * Specifies contact information for a person or organization.
 */
export interface ContactDetail extends Element {

  /**
   * If there is no named individual, the telecom information is for the organization as a whole.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The contact details for the individual (if a name was provided) or the organization.
   */
  telecom?: ContactPoint[] | undefined;

}