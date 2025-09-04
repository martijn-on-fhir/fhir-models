import { ContactDetail } from './ContactDetail';
import { Element } from './Element';

/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export interface Contributor extends Element {

  /**
   * Contact details to assist a user in finding and communicating with the contributor.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * The name of the individual or organization responsible for the contribution.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * The type of contributor.
   */
  type: ('author'|'editor'|'reviewer'|'endorser');
  _type?: Element | undefined;

}