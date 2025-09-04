import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * Country where the name applies.
 */
export interface MedicinalProductNameCountryLanguage extends BackboneElement {

  /**
   * Country code for where this name applies.
   */
  country: CodeableConcept;
  /**
   * Jurisdiction code for where this name applies.
   */
  jurisdiction?: CodeableConcept | undefined;
  /**
   * Language code for this name.
   */
  language: CodeableConcept;

}