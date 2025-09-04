import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SupplyDeliverySuppliedItem extends BackboneElement {
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the det
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the det
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /**
   * The amount of supply that has been dispensed. Includes unit of measure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Constructor for SupplyDeliverySuppliedItem
   */
  constructor(source: Partial<SupplyDeliverySuppliedItem> = {}) {
    super(source);
  }
}
