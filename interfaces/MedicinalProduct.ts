import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MarketingStatus } from './MarketingStatus';
import { MedicinalProductManufacturingBusinessOperation } from './MedicinalProductManufacturingBusinessOperation';
import { MedicinalProductName } from './MedicinalProductName';
import { MedicinalProductSpecialDesignation } from './MedicinalProductSpecialDesignation';
import { Reference } from './Reference';

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export interface MedicinalProduct extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicinalProduct';
  /**
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
   */
  additionalMonitoringIndicator?: CodeableConcept | undefined;
  /**
   * Supporting documentation, typically for regulatory submission.
   */
  attachedDocument?: Reference[] | undefined;
  /**
   * Clinical trials or studies that this product is involved in.
   */
  clinicalTrial?: Reference[] | undefined;
  /**
   * The dose form for a single part product, or combined form of a multiple part product.
   */
  combinedPharmaceuticalDoseForm?: CodeableConcept | undefined;
  /**
   * A product specific contact, person (in a role), or an organization.
   */
  contact?: Reference[] | undefined;
  /**
   * Reference to another product, e.g. for linking authorised to investigational product.
   */
  crossReference?: Identifier[] | undefined;
  /**
   * If this medicine applies to human or veterinary uses.
   */
  domain?: Coding | undefined;
  /**
   * Business identifier for this product. Could be an MPID.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  legalStatusOfSupply?: CodeableConcept | undefined;
  /**
   * An operation applied to the product, for manufacturing or adminsitrative purpose.
   */
  manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[] | undefined;
  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton.
   */
  marketingStatus?: MarketingStatus[] | undefined;
  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   */
  masterFile?: Reference[] | undefined;
  /**
   * The product's name, including full name and possibly coded parts.
   */
  name: MedicinalProductName[];
  /**
   * Package representation for the product.
   */
  packagedMedicinalProduct?: Reference[] | undefined;
  /**
   * If authorised for use in children.
   */
  paediatricUseIndicator?: CodeableConcept | undefined;
  /**
   * Pharmaceutical aspects of product.
   */
  pharmaceuticalProduct?: Reference[] | undefined;
  /**
   * Allows the product to be classified by various systems.
   */
  productClassification?: CodeableConcept[] | undefined;
  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   */
  specialDesignation?: MedicinalProductSpecialDesignation[] | undefined;
  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons.
   */
  specialMeasures?: string[] | undefined;
  _specialMeasures?: Element[] | undefined;
  /**
   * Regulatory type, e.g. Investigational or Authorized.
   */
  type?: CodeableConcept | undefined;

}