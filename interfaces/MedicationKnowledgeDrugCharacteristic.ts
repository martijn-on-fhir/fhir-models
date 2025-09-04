import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Quantity } from './Quantity';

/**
 * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 */
export interface MedicationKnowledgeDrugCharacteristic extends BackboneElement {

  /**
   * A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
   */
  type?: CodeableConcept | undefined;
  /**
   * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
   */
  valueCodeableConcept?: CodeableConcept | undefined;
  /**
   * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
   */
  valueBase64Binary?: string | undefined;
  _valueBase64Binary?: Element | undefined;

}