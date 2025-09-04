import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * Characteristics e.g. a products onset of action.
 */
export interface MedicinalProductPharmaceuticalCharacteristics extends BackboneElement {

  /**
   * A coded characteristic.
   */
  code: CodeableConcept;
  /**
   * The status of characteristic e.g. assigned or pending.
   */
  status?: CodeableConcept | undefined;

}