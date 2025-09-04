import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * A document is a version specific composition.
 */
export interface CompositionRelatesTo extends BackboneElement {

  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   */
  code: ('replaces'|'transforms'|'signs'|'appends');
  _code?: Element | undefined;
  /**
   * The target composition/document of this relationship.
   */
  targetIdentifier?: Identifier | undefined;
  /**
   * The target composition/document of this relationship.
   */
  targetReference?: Reference | undefined;

}