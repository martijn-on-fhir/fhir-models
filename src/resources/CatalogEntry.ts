import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CatalogEntryRelatedEntry } from '../backbone/CatalogEntryRelatedEntry';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CatalogEntry extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'CatalogEntry' as const;

  /**
   * Used for examplefor Out of Formulary, or any specifics.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  additionalCharacteristic?: CodeableConcept[];

  /**
   * User for example for ATC classification, or.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  additionalClassification?: CodeableConcept[];

  /**
   * Used in supporting related concepts, e.g. NDC to RxNorm.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  additionalIdentifier?: Identifier[];

  /**
   * Classes of devices, or ATC for medication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  classification?: CodeableConcept[];

  /**
   * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Perhaps not needed - if we use fhir resource metadata.
   */
  @IsOptional()
  @IsString()
  lastUpdated?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lastUpdated?: Element;

  /**
   * Whether the entry represents an orderable item.
   */
  @IsOptional()
  @IsBoolean()
  orderable?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _orderable?: Element;

  /**
   * The item in a catalog or definition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referencedItem?: Reference;

  /**
   * Used for example, to point to a substance, or to a device used to administer a medication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CatalogEntryRelatedEntry)
  relatedEntry?: CatalogEntryRelatedEntry[];

  /**
   * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribabl
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'retired', 'unknown'])
  status?: ('draft'|'active'|'retired'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The type of item - medication, device, service, protocol or other.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * The time period in which this catalog entry is expected to be active.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  validityPeriod?: Period;

  /**
   * The date until which this catalog entry is expected to be active.
   */
  @IsOptional()
  @IsString()
  validTo?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _validTo?: Element;

  /**
   * Constructor for CatalogEntry
   */
  constructor(source: Partial<CatalogEntry> = {}) {
    super(source);
    this.resourceType = 'CatalogEntry';
  }
}
