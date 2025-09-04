import { BiologicallyDerivedProductCollection } from './BiologicallyDerivedProductCollection';
import { BiologicallyDerivedProductManipulation } from './BiologicallyDerivedProductManipulation';
import { BiologicallyDerivedProductProcessing } from './BiologicallyDerivedProductProcessing';
import { BiologicallyDerivedProductStorage } from './BiologicallyDerivedProductStorage';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export interface BiologicallyDerivedProduct extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'BiologicallyDerivedProduct';
  /**
   * How this product was collected.
   */
  collection?: BiologicallyDerivedProductCollection | undefined;
  /**
   * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: Identifier[] | undefined;
  /**
   * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
   */
  manipulation?: BiologicallyDerivedProductManipulation | undefined;
  /**
   * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
   */
  parent?: Reference[] | undefined;
  /**
   * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
   */
  processing?: BiologicallyDerivedProductProcessing[] | undefined;
  /**
   * Broad category of this product.
   */
  productCategory?: ('organ'|'tissue'|'fluid'|'cells'|'biologicalAgent') | undefined;
  _productCategory?: Element | undefined;
  /**
   * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
   */
  productCode?: CodeableConcept | undefined;
  /**
   * Number of discrete units within this product.
   */
  quantity?: number | undefined;
  /**
   * Procedure request to obtain this biologically derived product.
   */
  request?: Reference[] | undefined;
  /**
   * Whether the product is currently available.
   */
  status?: ('available'|'unavailable') | undefined;
  _status?: Element | undefined;
  /**
   * Product storage.
   */
  storage?: BiologicallyDerivedProductStorage[] | undefined;

}