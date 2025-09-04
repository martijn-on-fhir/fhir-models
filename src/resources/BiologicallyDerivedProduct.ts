import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { BiologicallyDerivedProductCollection } from '../backbone/BiologicallyDerivedProductCollection';
import { BiologicallyDerivedProductManipulation } from '../backbone/BiologicallyDerivedProductManipulation';
import { BiologicallyDerivedProductProcessing } from '../backbone/BiologicallyDerivedProductProcessing';
import { BiologicallyDerivedProductStorage } from '../backbone/BiologicallyDerivedProductStorage';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class BiologicallyDerivedProduct extends DomainResource implements fhir.BiologicallyDerivedProduct {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'BiologicallyDerivedProduct' as const;

  /**
   * How this product was collected.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => BiologicallyDerivedProductCollection)
  collection?: BiologicallyDerivedProductCollection;

  /**
   * This records identifiers associated with this biologically derived product instance that are defined by business process
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => BiologicallyDerivedProductManipulation)
  manipulation?: BiologicallyDerivedProductManipulation;

  /**
   * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  parent?: Reference[];

  /**
   * Any processing of the product during collection that does not change the fundamental nature of the product. For example 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BiologicallyDerivedProductProcessing)
  processing?: BiologicallyDerivedProductProcessing[];

  /**
   * Broad category of this product.
   */
  @IsOptional()
  @IsIn(['organ', 'tissue', 'fluid', 'cells', 'biologicalAgent'])
  productCategory?: ('organ'|'tissue'|'fluid'|'cells'|'biologicalAgent');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _productCategory?: Element;

  /**
   * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productCode?: CodeableConcept;

  /**
   * Number of discrete units within this product.
   */
  @IsOptional()
  @IsNumber()
  quantity?: number;

  /**
   * Procedure request to obtain this biologically derived product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  request?: Reference[];

  /**
   * Whether the product is currently available.
   */
  @IsOptional()
  @IsIn(['available', 'unavailable'])
  status?: ('available'|'unavailable');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Product storage.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BiologicallyDerivedProductStorage)
  storage?: BiologicallyDerivedProductStorage[];

  /**
   * Constructor for BiologicallyDerivedProduct
   */
  constructor(source: Partial<BiologicallyDerivedProduct> = {}) {
    super(source);
    this.resourceType = 'BiologicallyDerivedProduct';
  }
}
