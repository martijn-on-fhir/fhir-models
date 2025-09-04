import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MarketingStatus } from '../backbone/MarketingStatus';
import { MedicinalProductPackagedBatchIdentifier } from '../backbone/MedicinalProductPackagedBatchIdentifier';
import { MedicinalProductPackagedPackageItem } from '../backbone/MedicinalProductPackagedPackageItem';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductPackaged extends DomainResource implements fhir.MedicinalProductPackaged {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicinalProductPackaged' as const;

  /**
   * Batch numbering.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPackagedBatchIdentifier)
  batchIdentifier?: MedicinalProductPackagedBatchIdentifier[];

  /**
   * Textual description.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Unique identifier.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  legalStatusOfSupply?: CodeableConcept;

  /**
   * Manufacturer of this Package Item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturer?: Reference[];

  /**
   * Manufacturer of this Package Item.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  marketingAuthorization?: Reference;

  /**
   * Marketing information.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MarketingStatus)
  marketingStatus?: MarketingStatus[];

  /**
   * A packaging item, as a contained for medicine, possibly with other packaging items within.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPackagedPackageItem)
  packageItem?: MedicinalProductPackagedPackageItem[];

  /**
   * The product with this is a pack for.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /**
   * Constructor for MedicinalProductPackaged
   */
  constructor(source: Partial<MedicinalProductPackaged> = {}) {
    super(source);
    this.resourceType = 'MedicinalProductPackaged';
  }
}
