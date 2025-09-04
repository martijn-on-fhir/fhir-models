import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Information about a page within the IG.
 */
export interface ImplementationGuideManifestPage extends BackboneElement {

  /**
   * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
   */
  anchor?: string[] | undefined;
  _anchor?: Element[] | undefined;
  /**
   * Appending 'rendering' + "/" + this should resolve to the page.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Label for the page intended for human display.
   */
  title?: string | undefined;
  _title?: Element | undefined;

}