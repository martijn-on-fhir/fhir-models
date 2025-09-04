import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Quantity } from './Quantity';

/**
 * Information that only applies to packages (not products).
 */
export interface MedicationKnowledgePackaging extends BackboneElement {

  /**
   * The number of product units the package would contain if fully loaded.
   */
  quantity?: Quantity | undefined;
  /**
   * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
   */
  type?: CodeableConcept | undefined;

}