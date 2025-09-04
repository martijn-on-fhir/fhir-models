import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';

/**
 * Coding words or phrases of the name.
 */
export interface MedicinalProductNameNamePart extends BackboneElement {

  /**
   * A fragment of a product name.
   */
  part: string;
  _part?: Element | undefined;
  /**
   * Idenifying type for this part of the name (e.g. strength part).
   */
  type: Coding;

}