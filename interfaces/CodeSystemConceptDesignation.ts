import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';

/**
 * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
 */
export interface CodeSystemConceptDesignation extends BackboneElement {

  /**
   * In the absence of a language, the resource language applies.
   */
  language?: string | undefined;
  _language?: Element | undefined;
  /**
   * If no use is provided, the designation can be assumed to be suitable for general display to a human user.
   */
  use?: Coding | undefined;
  /**
   * The text value for this designation.
   */
  value: string;
  _value?: Element | undefined;

}