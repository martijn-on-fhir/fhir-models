import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Timing } from './Timing';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class NutritionOrderSupplement extends BackboneElement {
  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  @IsOptional()
  @IsString()
  instruction?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _instruction?: Element;

  /**
   * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
   */
  @IsOptional()
  @IsString()
  productName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _productName?: Element;

  /**
   * The amount of the nutritional supplement to be given.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combin
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Timing)
  schedule?: Timing[];

  /**
   * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for NutritionOrderSupplement
   */
  constructor(source: Partial<NutritionOrderSupplement> = {}) {
    super(source);
  }
}
