import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export interface CommunicationPayload extends BackboneElement {

  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  contentString?: string | undefined;
  _contentString?: Element | undefined;
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  contentAttachment?: Attachment | undefined;
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  contentReference?: Reference | undefined;

}