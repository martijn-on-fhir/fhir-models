import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export interface ImplementationGuideManifestResource extends BackboneElement {

  /**
   * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
   */
  exampleBoolean?: boolean | undefined;
  _exampleBoolean?: Element | undefined;
  /**
   * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
   */
  exampleCanonical?: string | undefined;
  _exampleCanonical?: Element | undefined;
  /**
   * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
   */
  reference: Reference;
  /**
   * Appending 'rendering' + "/" + this should resolve to the resource page.
   */
  relativePath?: string | undefined;
  _relativePath?: Element | undefined;

}