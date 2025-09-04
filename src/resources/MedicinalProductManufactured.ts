import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ProdCharacteristic } from '../backbone/ProdCharacteristic';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductManufactured extends DomainResource implements fhir.MedicinalProductManufactured {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicinalProductManufactured' as const;

  /**
   * Ingredient.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  ingredient?: Reference[];

  /**
   * Dose form as manufactured and before any transformation into the pharmaceutical product.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  manufacturedDoseForm?: CodeableConcept;

  /**
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturer?: Reference[];

  /**
   * Other codeable characteristics.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  otherCharacteristics?: CodeableConcept[];

  /**
   * Dimensions, color etc.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProdCharacteristic)
  physicalCharacteristics?: ProdCharacteristic;

  /**
   * The quantity or "count number" of the manufactured item.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * The “real world” units in which the quantity of the manufactured item is described.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unitOfPresentation?: CodeableConcept;

  /**
   * Constructor for MedicinalProductManufactured
   */
  constructor(source: Partial<MedicinalProductManufactured> = {}) {
    super(source);
    this.resourceType = 'MedicinalProductManufactured';
  }
}
