import { Element } from './Element';

/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export interface Narrative extends Element {

  /**
   * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
   */
  div: string;
  _div?: Element | undefined;
  /**
   * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
   */
  status: ('generated'|'extensions'|'additional'|'empty');
  _status?: Element | undefined;

}