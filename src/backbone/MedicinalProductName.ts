import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { MedicinalProductNameCountryLanguage } from './MedicinalProductNameCountryLanguage';
import { MedicinalProductNameNamePart } from './MedicinalProductNameNamePart';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductName extends BackboneElement {
  /**
   * Country where the name applies.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductNameCountryLanguage)
  countryLanguage?: MedicinalProductNameCountryLanguage[];

  /**
   * Coding words or phrases of the name.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductNameNamePart)
  namePart?: MedicinalProductNameNamePart[];

  /**
   * The full product name.
   */
  @IsOptional()
  @IsString()
  productName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _productName?: Element;

  /**
   * Constructor for MedicinalProductName
   */
  constructor(source: Partial<MedicinalProductName> = {}) {
    super(source);
  }
}
