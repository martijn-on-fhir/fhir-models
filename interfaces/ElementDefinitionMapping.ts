import { Element } from './Element';

/**
 * Mappings are not necessarily specific enough for safe translation.
 */
export interface ElementDefinitionMapping extends Element {

  /**
   * Comments that provide information about the mapping or its use.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * An internal reference to the definition of a mapping.
   */
  identity: string;
  _identity?: Element | undefined;
  /**
   * If omitted, then there can be no expectation of computational interpretation of the mapping.
   */
  language?: string | undefined;
  _language?: Element | undefined;
  /**
   * For most mappings, the syntax is undefined.  Syntax will be provided for mappings to the RIM.  Multiple mappings may be possible and may include constraints on other resource elements that identify when a particular mapping applies.
   */
  map: string;
  _map?: Element | undefined;

}