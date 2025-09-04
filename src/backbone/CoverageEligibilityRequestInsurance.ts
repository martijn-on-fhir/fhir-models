import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CoverageEligibilityRequestInsurance extends BackboneElement implements fhir.CoverageEligibilityRequestInsurance {
  /**
   * A business agreement number established between the provider and the insurer for special business processing purposes.
   */
  @IsOptional()
  @IsString()
  businessArrangement?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _businessArrangement?: Element;

  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /**
   * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. F
   */
  @IsOptional()
  @IsBoolean()
  focal?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _focal?: Element;

  /**
   * Constructor for CoverageEligibilityRequestInsurance
   */
  constructor(source: Partial<CoverageEligibilityRequestInsurance> = {}) {
    super(source);
  }
}
