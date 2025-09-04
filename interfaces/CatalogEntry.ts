import { CatalogEntryRelatedEntry } from './CatalogEntryRelatedEntry';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export interface CatalogEntry extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'CatalogEntry';
  /**
   * Used for examplefor Out of Formulary, or any specifics.
   */
  additionalCharacteristic?: CodeableConcept[] | undefined;
  /**
   * User for example for ATC classification, or.
   */
  additionalClassification?: CodeableConcept[] | undefined;
  /**
   * Used in supporting related concepts, e.g. NDC to RxNorm.
   */
  additionalIdentifier?: Identifier[] | undefined;
  /**
   * Classes of devices, or ATC for medication.
   */
  classification?: CodeableConcept[] | undefined;
  /**
   * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Perhaps not needed - if we use fhir resource metadata.
   */
  lastUpdated?: string | undefined;
  _lastUpdated?: Element | undefined;
  /**
   * Whether the entry represents an orderable item.
   */
  orderable: boolean;
  _orderable?: Element | undefined;
  /**
   * The item in a catalog or definition.
   */
  referencedItem: Reference;
  /**
   * Used for example, to point to a substance, or to a device used to administer a medication.
   */
  relatedEntry?: CatalogEntryRelatedEntry[] | undefined;
  /**
   * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
   */
  status?: ('draft'|'active'|'retired'|'unknown') | undefined;
  _status?: Element | undefined;
  /**
   * The type of item - medication, device, service, protocol or other.
   */
  type?: CodeableConcept | undefined;
  /**
   * The time period in which this catalog entry is expected to be active.
   */
  validityPeriod?: Period | undefined;
  /**
   * The date until which this catalog entry is expected to be active.
   */
  validTo?: string | undefined;
  _validTo?: Element | undefined;

}