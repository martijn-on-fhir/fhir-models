import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { TerminologyCapabilitiesCodeSystemVersionFilter } from './TerminologyCapabilitiesCodeSystemVersionFilter';

/**
 * Language translations might not be available for all codes.
 */
export interface TerminologyCapabilitiesCodeSystemVersion extends BackboneElement {

  /**
   * For version-less code systems, there should be a single version with no identifier.
   */
  code?: string | undefined;
  _code?: Element | undefined;
  /**
   * If the compositional grammar defined by the code system is supported.
   */
  compositional?: boolean | undefined;
  _compositional?: Element | undefined;
  /**
   * Filter Properties supported.
   */
  filter?: TerminologyCapabilitiesCodeSystemVersionFilter[] | undefined;
  /**
   * If this is the default version for this code system.
   */
  isDefault?: boolean | undefined;
  _isDefault?: Element | undefined;
  /**
   * Language Displays supported.
   */
  language?: string[] | undefined;
  _language?: Element[] | undefined;
  /**
   * Properties supported for $lookup.
   */
  property?: string[] | undefined;
  _property?: Element[] | undefined;

}