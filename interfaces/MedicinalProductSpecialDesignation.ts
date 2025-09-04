import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export interface MedicinalProductSpecialDesignation extends BackboneElement {

  /**
   * Date when the designation was granted.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * Identifier for the designation, or procedure number.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indicationCodeableConcept?: CodeableConcept | undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indicationReference?: Reference | undefined;
  /**
   * The intended use of the product, e.g. prevention, treatment.
   */
  intendedUse?: CodeableConcept | undefined;
  /**
   * Animal species for which this applies.
   */
  species?: CodeableConcept | undefined;
  /**
   * For example granted, pending, expired or withdrawn.
   */
  status?: CodeableConcept | undefined;
  /**
   * The type of special designation, e.g. orphan drug, minor use.
   */
  type?: CodeableConcept | undefined;

}