import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { ProdCharacteristic } from './ProdCharacteristic';
import { ProductShelfLife } from './ProductShelfLife';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductPackagedPackageItem extends BackboneElement implements fhir.MedicinalProductPackagedPackageItem {
  /**
   * A possible alternate material for the packaging.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  alternateMaterial?: CodeableConcept[];

  /**
   * A device accompanying a medicinal product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  device?: Reference[];

  /**
   * Including possibly Data Carrier Identifier.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The manufactured item as contained in the packaged medicinal product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturedItem?: Reference[];

  /**
   * Manufacturer of this Package Item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturer?: Reference[];

  /**
   * Material type of the package item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  material?: CodeableConcept[];

  /**
   * Other codeable characteristics.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  otherCharacteristics?: CodeableConcept[];

  /**
   * Allows containers within containers.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPackagedPackageItem)
  packageItem?: MedicinalProductPackagedPackageItem[];

  /**
   * Dimensions, color etc.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProdCharacteristic)
  physicalCharacteristics?: ProdCharacteristic;

  /**
   * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Shelf Life and storage information.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductShelfLife)
  shelfLifeStorage?: ProductShelfLife[];

  /**
   * The physical type of the container of the medicine.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicinalProductPackagedPackageItem
   */
  constructor(source: Partial<MedicinalProductPackagedPackageItem> = {}) {
    super(source);
  }
}
