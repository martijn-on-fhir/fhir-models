import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
 */
export interface StructureMapStructure extends BackboneElement {

  /**
   * This is needed if both types have the same name (e.g. version conversion).
   */
  alias?: string | undefined;
  _alias?: Element | undefined;
  /**
   * Documentation that describes how the structure is used in the mapping.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * How the referenced structure is used in this mapping.
   */
  mode: ('source'|'queried'|'target'|'produced');
  _mode?: Element | undefined;
  /**
   * The canonical reference to the structure.
   */
  url: string;
  _url?: Element | undefined;

}