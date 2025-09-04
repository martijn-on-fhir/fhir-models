import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
export interface ImplementationGuideDefinitionGrouping extends BackboneElement {

  /**
   * Human readable text describing the package.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The human-readable title to display for the package of resources when rendering the implementation guide.
   */
  name: string;
  _name?: Element | undefined;

}