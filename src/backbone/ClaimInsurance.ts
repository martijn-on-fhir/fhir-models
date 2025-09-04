import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimInsurance extends BackboneElement implements fhir.ClaimInsurance {
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
   * Only required in jurisdictions where insurers, rather than the provider, are required to send claims to  insurers that a
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

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
   * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit or
   */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /**
   * Constructor for ClaimInsurance
   */
  constructor(source: Partial<ClaimInsurance> = {}) {
    super(source);
  }
}
