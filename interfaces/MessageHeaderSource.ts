import { BackboneElement } from './BackboneElement';
import { ContactPoint } from './ContactPoint';
import { Element } from './Element';

/**
 * The source application from which this message originated.
 */
export interface MessageHeaderSource extends BackboneElement {

  /**
   * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   */
  contact?: ContactPoint | undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  endpoint: string;
  _endpoint?: Element | undefined;
  /**
   * Human-readable name for the source system.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * May include configuration or other information useful in debugging.
   */
  software?: string | undefined;
  _software?: Element | undefined;
  /**
   * Can convey versions of multiple systems in situations where a message passes through multiple hands.
   */
  version?: string | undefined;
  _version?: Element | undefined;

}