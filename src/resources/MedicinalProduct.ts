import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { Identifier } from '../elements/Identifier';
import { MarketingStatus } from '../backbone/MarketingStatus';
import { MedicinalProductManufacturingBusinessOperation } from '../backbone/MedicinalProductManufacturingBusinessOperation';
import { MedicinalProductName } from '../backbone/MedicinalProductName';
import { MedicinalProductSpecialDesignation } from '../backbone/MedicinalProductSpecialDesignation';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProduct extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicinalProduct' as const;

  /**
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  additionalMonitoringIndicator?: CodeableConcept;

  /**
   * Supporting documentation, typically for regulatory submission.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  attachedDocument?: Reference[];

  /**
   * Clinical trials or studies that this product is involved in.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  clinicalTrial?: Reference[];

  /**
   * The dose form for a single part product, or combined form of a multiple part product.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  combinedPharmaceuticalDoseForm?: CodeableConcept;

  /**
   * A product specific contact, person (in a role), or an organization.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  contact?: Reference[];

  /**
   * Reference to another product, e.g. for linking authorised to investigational product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  crossReference?: Identifier[];

  /**
   * If this medicine applies to human or veterinary uses.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  domain?: Coding;

  /**
   * Business identifier for this product. Could be an MPID.
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
   * An operation applied to the product, for manufacturing or adminsitrative purpose.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductManufacturingBusinessOperation)
  manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[];

  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MarketingStatus)
  marketingStatus?: MarketingStatus[];

  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  masterFile?: Reference[];

  /**
   * The product's name, including full name and possibly coded parts.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductName)
  name?: MedicinalProductName[];

  /**
   * Package representation for the product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  packagedMedicinalProduct?: Reference[];

  /**
   * If authorised for use in children.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  paediatricUseIndicator?: CodeableConcept;

  /**
   * Pharmaceutical aspects of product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  pharmaceuticalProduct?: Reference[];

  /**
   * Allows the product to be classified by various systems.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  productClassification?: CodeableConcept[];

  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductSpecialDesignation)
  specialDesignation?: MedicinalProductSpecialDesignation[];

  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  specialMeasures?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _specialMeasures?: Element[];

  /**
   * Regulatory type, e.g. Investigational or Authorized.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicinalProduct
   */
  constructor(source: Partial<MedicinalProduct> = {}) {
    super(source);
    this.resourceType = 'MedicinalProduct';
  }
}
