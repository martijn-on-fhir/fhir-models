import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { ProdCharacteristic } from './ProdCharacteristic';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export interface MedicinalProductManufactured extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicinalProductManufactured';
  /**
   * Ingredient.
   */
  ingredient?: Reference[] | undefined;
  /**
   * Dose form as manufactured and before any transformation into the pharmaceutical product.
   */
  manufacturedDoseForm: CodeableConcept;
  /**
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
   */
  manufacturer?: Reference[] | undefined;
  /**
   * Other codeable characteristics.
   */
  otherCharacteristics?: CodeableConcept[] | undefined;
  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: ProdCharacteristic | undefined;
  /**
   * The quantity or "count number" of the manufactured item.
   */
  quantity: Quantity;
  /**
   * The “real world” units in which the quantity of the manufactured item is described.
   */
  unitOfPresentation?: CodeableConcept | undefined;

}