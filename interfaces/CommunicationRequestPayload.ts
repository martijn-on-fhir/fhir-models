import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export interface CommunicationRequestPayload extends BackboneElement {

  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentString?: string | undefined;
  _contentString?: Element | undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentAttachment?: Attachment | undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentReference?: Reference | undefined;

}