import { Access } from './Access';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { GET } from './GET';

/**
 * Information about security implementation from an interface perspective - what a client needs to know.
 */
export interface CapabilityStatementRestSecurity extends BackboneElement {

  /**
   * The easiest CORS headers to add are Access-Control-Allow-Origin: * & Access-Control-Request-Method: GET, POST, PUT, DELETE. All servers SHOULD support CORS.
   */
  cors?: boolean | undefined;
  _cors?: Element | undefined;
  /**
   * General description of how security works.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Types of security services that are supported/required by the system.
   */
  service?: CodeableConcept[] | undefined;

}