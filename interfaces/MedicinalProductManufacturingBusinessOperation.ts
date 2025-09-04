import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export interface MedicinalProductManufacturingBusinessOperation extends BackboneElement {

  /**
   * Regulatory authorization reference number.
   */
  authorisationReferenceNumber?: Identifier | undefined;
  /**
   * To indicate if this proces is commercially confidential.
   */
  confidentialityIndicator?: CodeableConcept | undefined;
  /**
   * Regulatory authorization date.
   */
  effectiveDate?: string | undefined;
  _effectiveDate?: Element | undefined;
  /**
   * The manufacturer or establishment associated with the process.
   */
  manufacturer?: Reference[] | undefined;
  /**
   * The type of manufacturing operation.
   */
  operationType?: CodeableConcept | undefined;
  /**
   * A regulator which oversees the operation.
   */
  regulator?: Reference | undefined;

}