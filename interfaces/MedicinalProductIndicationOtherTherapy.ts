import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export interface MedicinalProductIndicationOtherTherapy extends BackboneElement {

  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   */
  medicationCodeableConcept?: CodeableConcept | undefined;
  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   */
  medicationReference?: Reference | undefined;
  /**
   * The type of relationship between the medicinal product indication or contraindication and another therapy.
   */
  therapyRelationshipType: CodeableConcept;

}