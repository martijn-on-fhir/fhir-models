import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Identifier } from './Identifier';
import { ProdCharacteristic } from './ProdCharacteristic';
import { ProductShelfLife } from './ProductShelfLife';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
export interface MedicinalProductPackagedPackageItem extends BackboneElement {

  /**
   * A possible alternate material for the packaging.
   */
  alternateMaterial?: CodeableConcept[] | undefined;
  /**
   * A device accompanying a medicinal product.
   */
  device?: Reference[] | undefined;
  /**
   * Including possibly Data Carrier Identifier.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The manufactured item as contained in the packaged medicinal product.
   */
  manufacturedItem?: Reference[] | undefined;
  /**
   * Manufacturer of this Package Item.
   */
  manufacturer?: Reference[] | undefined;
  /**
   * Material type of the package item.
   */
  material?: CodeableConcept[] | undefined;
  /**
   * Other codeable characteristics.
   */
  otherCharacteristics?: CodeableConcept[] | undefined;
  /**
   * Allows containers within containers.
   */
  packageItem?: MedicinalProductPackagedPackageItem[] | undefined;
  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: ProdCharacteristic | undefined;
  /**
   * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
   */
  quantity: Quantity;
  /**
   * Shelf Life and storage information.
   */
  shelfLifeStorage?: ProductShelfLife[] | undefined;
  /**
   * The physical type of the container of the medicine.
   */
  type: CodeableConcept;

}