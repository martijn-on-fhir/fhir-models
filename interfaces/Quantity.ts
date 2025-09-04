import { Element } from './Element';

/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export interface Quantity extends Element {

  /**
   * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
   */
  code?: string | undefined;
  _code?: Element | undefined;
  /**
   * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
   */
  comparator?: ('<'|'<='|'>='|'>') | undefined;
  _comparator?: Element | undefined;
  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: string | undefined;
  _system?: Element | undefined;
  /**
   * A human-readable form of the unit.
   */
  unit?: string | undefined;
  _unit?: Element | undefined;
  /**
   * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  value?: number | undefined;

}