import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
 */
export interface DocumentReferenceRelatesTo extends BackboneElement {

  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   */
  code: ('replaces'|'transforms'|'signs'|'appends');
  _code?: Element | undefined;
  /**
   * The target document of this relationship.
   */
  target: Reference;

}