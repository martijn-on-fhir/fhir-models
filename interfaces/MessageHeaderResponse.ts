import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export interface MessageHeaderResponse extends BackboneElement {

  /**
   * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
   */
  code: ('ok'|'transient-error'|'fatal-error');
  _code?: Element | undefined;
  /**
   * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
   */
  details?: Reference | undefined;
  /**
   * The MessageHeader.id of the message to which this message is a response.
   */
  identifier: string;
  _identifier?: Element | undefined;

}