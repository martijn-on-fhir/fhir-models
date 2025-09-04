import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponseInsurance extends BackboneElement {
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
   * Must not be specified when 'focal=true' for this insurance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  claimResponse?: Reference;

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
   * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit or
   */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /**
   * Constructor for ClaimResponseInsurance
   */
  constructor(source: Partial<ClaimResponseInsurance> = {}) {
    super(source);
  }
}
