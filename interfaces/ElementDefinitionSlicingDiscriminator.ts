import { Element } from './Element';

/**
 * If there is no discriminator, the content is hard to process, so this should be avoided.
 */
export interface ElementDefinitionSlicingDiscriminator extends Element {

  /**
   * The only FHIRPath functions that are allowed are as(type), resolve(), and extension(url).
   */
  path: string;
  _path?: Element | undefined;
  /**
   * How the element value is interpreted when discrimination is evaluated.
   */
  type: ('value'|'exists'|'pattern'|'type'|'profile');
  _type?: Element | undefined;

}