import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * A link to the FHIR specification that this test is covering.
 */
export interface TestScriptMetadataLink extends BackboneElement {

  /**
   * Short description of the link.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * URL to a particular requirement or feature within the FHIR specification.
   */
  url: string;
  _url?: Element | undefined;

}