import { Address } from './Address';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
 */
export interface ClaimAccident extends BackboneElement {

  /**
   * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
   */
  date: string;
  _date?: Element | undefined;
  /**
   * The physical location of the accident event.
   */
  locationAddress?: Address | undefined;
  /**
   * The physical location of the accident event.
   */
  locationReference?: Reference | undefined;
  /**
   * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
   */
  type?: CodeableConcept | undefined;

}