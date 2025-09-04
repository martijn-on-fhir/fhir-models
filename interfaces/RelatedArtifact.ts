import { Attachment } from './Attachment';
import { Element } from './Element';

/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export interface RelatedArtifact extends Element {

  /**
   * Additional structured information about citations should be captured as extensions.
   */
  citation?: string | undefined;
  _citation?: Element | undefined;
  /**
   * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
   */
  display?: string | undefined;
  _display?: Element | undefined;
  /**
   * The document being referenced, represented as an attachment. This is exclusive with the resource element.
   */
  document?: Attachment | undefined;
  /**
   * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
   */
  label?: string | undefined;
  _label?: Element | undefined;
  /**
   * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
   */
  resource?: string | undefined;
  _resource?: Element | undefined;
  /**
   * The type of relationship to the related artifact.
   */
  type: ('documentation'|'justification'|'citation'|'predecessor'|'successor'|'derived-from'|'depends-on'|'composed-of');
  _type?: Element | undefined;
  /**
   * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
   */
  url?: string | undefined;
  _url?: Element | undefined;

}