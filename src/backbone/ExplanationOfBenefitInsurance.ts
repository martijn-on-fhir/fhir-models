import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExplanationOfBenefitInsurance extends BackboneElement implements fhir.ExplanationOfBenefitInsurance {
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /**
   * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. 
   */
  @IsOptional()
  @IsBoolean()
  focal?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _focal?: Element;

  /**
   * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  preAuthRef?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _preAuthRef?: Element[];

  /**
   * Constructor for ExplanationOfBenefitInsurance
   */
  constructor(source: Partial<ExplanationOfBenefitInsurance> = {}) {
    super(source);
  }
}
