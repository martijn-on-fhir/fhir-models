import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ImplementationGuideManifestPage } from './ImplementationGuideManifestPage';
import { ImplementationGuideManifestResource } from './ImplementationGuideManifestResource';

/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
export interface ImplementationGuideManifest extends BackboneElement {

  /**
   * Indicates a relative path to an image that exists within the IG.
   */
  image?: string[] | undefined;
  _image?: Element[] | undefined;
  /**
   * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
   */
  other?: string[] | undefined;
  _other?: Element[] | undefined;
  /**
   * Information about a page within the IG.
   */
  page?: ImplementationGuideManifestPage[] | undefined;
  /**
   * A pointer to official web page, PDF or other rendering of the implementation guide.
   */
  rendering?: string | undefined;
  _rendering?: Element | undefined;
  /**
   * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
   */
  resource: ImplementationGuideManifestResource[];

}