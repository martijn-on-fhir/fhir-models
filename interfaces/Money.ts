import { Element } from './Element';

/**
 * An amount of economic utility in some recognized currency.
 */
export interface Money extends Element {

  /**
   * ISO 4217 Currency Code.
   */
  currency?: string | undefined;
  _currency?: Element | undefined;
  /**
   * Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  value?: number | undefined;

}