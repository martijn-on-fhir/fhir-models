import { Element } from './Element';
import { Period } from './Period';

/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export interface ContactPoint extends Element {

  /**
   * Time period when the contact point was/is in use.
   */
  period?: Period | undefined;
  /**
   * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
   */
  rank?: number | undefined;
  /**
   * Telecommunications form for contact point - what communications system is required to make use of the contact.
   */
  system?: ('phone'|'fax'|'email'|'pager'|'url'|'sms'|'other') | undefined;
  _system?: Element | undefined;
  /**
   * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
   */
  use?: ('home'|'work'|'temp'|'old'|'mobile') | undefined;
  _use?: Element | undefined;
  /**
   * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
   */
  value?: string | undefined;
  _value?: Element | undefined;

}