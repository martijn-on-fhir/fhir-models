import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * A template for building resources.
 */
export interface ImplementationGuideDefinitionTemplate extends BackboneElement {

  /**
   * Type of template specified.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * The scope in which the template applies.
   */
  scope?: string | undefined;
  _scope?: Element | undefined;
  /**
   * The source location for the template.
   */
  source: string;
  _source?: Element | undefined;

}