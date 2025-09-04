import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';

/**
 * The document and format referenced. There may be multiple content element repetitions, each with a different format.
 */
export interface DocumentReferenceContent extends BackboneElement {

  /**
   * The document or URL of the document along with critical metadata to prove content has integrity.
   */
  attachment: Attachment;
  /**
   * Note that while IHE mostly issues URNs for format types, not all documents can be identified by a URI.
   */
  format?: Coding | undefined;

}