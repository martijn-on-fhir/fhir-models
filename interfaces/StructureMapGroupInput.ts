import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * If no inputs are named, then the entry mappings are type based.
 */
export interface StructureMapGroupInput extends BackboneElement {

  /**
   * Documentation for this instance of data.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * Mode for this instance of data.
   */
  mode: ('source'|'target');
  _mode?: Element | undefined;
  /**
   * Name for this instance of data.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Type for this instance of data.
   */
  type?: string | undefined;
  _type?: Element | undefined;

}