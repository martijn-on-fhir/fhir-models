import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MarketingStatus } from './MarketingStatus';
import { MedicinalProductPackagedBatchIdentifier } from './MedicinalProductPackagedBatchIdentifier';
import { MedicinalProductPackagedPackageItem } from './MedicinalProductPackagedPackageItem';
import { Reference } from './Reference';

/**
 * A medicinal product in a container or package.
 */
export interface MedicinalProductPackaged extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicinalProductPackaged';
  /**
   * Batch numbering.
   */
  batchIdentifier?: MedicinalProductPackagedBatchIdentifier[] | undefined;
  /**
   * Textual description.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Unique identifier.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  legalStatusOfSupply?: CodeableConcept | undefined;
  /**
   * Manufacturer of this Package Item.
   */
  manufacturer?: Reference[] | undefined;
  /**
   * Manufacturer of this Package Item.
   */
  marketingAuthorization?: Reference | undefined;
  /**
   * Marketing information.
   */
  marketingStatus?: MarketingStatus[] | undefined;
  /**
   * A packaging item, as a contained for medicine, possibly with other packaging items within.
   */
  packageItem: MedicinalProductPackagedPackageItem[];
  /**
   * The product with this is a pack for.
   */
  subject?: Reference[] | undefined;

}