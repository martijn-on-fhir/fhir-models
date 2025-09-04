import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Population } from './Population';
import { Reference } from './Reference';

/**
 * Describe the undesirable effects of the medicinal product.
 */
export interface MedicinalProductUndesirableEffect extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicinalProductUndesirableEffect';
  /**
   * Classification of the effect.
   */
  classification?: CodeableConcept | undefined;
  /**
   * The frequency of occurrence of the effect.
   */
  frequencyOfOccurrence?: CodeableConcept | undefined;
  /**
   * The population group to which this applies.
   */
  population?: Population[] | undefined;
  /**
   * The medication for which this is an indication.
   */
  subject?: Reference[] | undefined;
  /**
   * The symptom, condition or undesirable effect.
   */
  symptomConditionEffect?: CodeableConcept | undefined;

}