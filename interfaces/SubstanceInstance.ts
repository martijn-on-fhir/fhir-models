import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Quantity } from './Quantity';

/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export interface SubstanceInstance extends BackboneElement {

  /**
   * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
   */
  expiry?: string | undefined;
  _expiry?: Element | undefined;
  /**
   * Identifier associated with the package/container (usually a label affixed directly).
   */
  identifier?: Identifier | undefined;
  /**
   * The amount of the substance.
   */
  quantity?: Quantity | undefined;

}