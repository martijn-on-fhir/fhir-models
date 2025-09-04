import { BackboneElement } from './BackboneElement';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * May be identifiers or resources that caused the DocumentManifest to be created.
 */
export interface DocumentManifestRelated extends BackboneElement {

  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  identifier?: Identifier | undefined;
  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  ref?: Reference | undefined;

}