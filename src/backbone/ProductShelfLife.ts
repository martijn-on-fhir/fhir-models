import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ProductShelfLife extends BackboneElement {
  /**
   * Unique identifier for the packaged Medicinal Product.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurem
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  period?: Quantity;

  /**
   * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialPrecautionsForStorage?: CodeableConcept[];

  /**
   * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Produc
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for ProductShelfLife
   */
  constructor(source: Partial<ProductShelfLife> = {}) {
    super(source);
  }
}
