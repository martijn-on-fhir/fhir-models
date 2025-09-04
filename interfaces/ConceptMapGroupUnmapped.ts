import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * This only applies if the source code has a system value that matches the system defined for the group.
 */
export interface ConceptMapGroupUnmapped extends BackboneElement {

  /**
   * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
   */
  code?: string | undefined;
  _code?: Element | undefined;
  /**
   * The display is ignored when processing the map.
   */
  display?: string | undefined;
  _display?: Element | undefined;
  /**
   * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
   */
  mode: ('provided'|'fixed'|'other-map');
  _mode?: Element | undefined;
  /**
   * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
   */
  url?: string | undefined;
  _url?: Element | undefined;

}