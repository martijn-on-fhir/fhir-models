import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Period } from './Period';

/**
 * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
 */
export interface NamingSystemUniqueId extends BackboneElement {

  /**
   * e.g. "must be used in Germany" or "was initially published in error with this value".
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * Within a registry, a given identifier should only be "active" for a single namespace at a time.  (Ideally, an identifier should only ever be associated with a single namespace across all time).
   */
  period?: Period | undefined;
  /**
   * Indicates whether this identifier is the "preferred" identifier of this type.
   */
  preferred?: boolean | undefined;
  _preferred?: Element | undefined;
  /**
   * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc.
   */
  type: ('oid'|'uuid'|'uri'|'other');
  _type?: Element | undefined;
  /**
   * If the value is a URI intended for use as FHIR system identifier, the URI should not contain "\" or "?" or "," since this makes escaping very difficult.
   */
  value: string;
  _value?: Element | undefined;

}