import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { MedicinalProductNameCountryLanguage } from './MedicinalProductNameCountryLanguage';
import { MedicinalProductNameNamePart } from './MedicinalProductNameNamePart';

/**
 * The product's name, including full name and possibly coded parts.
 */
export interface MedicinalProductName extends BackboneElement {

  /**
   * Country where the name applies.
   */
  countryLanguage?: MedicinalProductNameCountryLanguage[] | undefined;
  /**
   * Coding words or phrases of the name.
   */
  namePart?: MedicinalProductNameNamePart[] | undefined;
  /**
   * The full product name.
   */
  productName: string;
  _productName?: Element | undefined;

}