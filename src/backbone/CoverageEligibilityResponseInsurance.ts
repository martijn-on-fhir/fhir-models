import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CoverageEligibilityResponseInsuranceItem } from './CoverageEligibilityResponseInsuranceItem';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CoverageEligibilityResponseInsurance extends BackboneElement {
  /**
   * The term of the benefits documented in this response.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  benefitPeriod?: Period;

  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /**
   * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration 
   */
  @IsOptional()
  @IsBoolean()
  inforce?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _inforce?: Element;

  /**
   * Benefits and optionally current balances, and authorization details by category or service.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageEligibilityResponseInsuranceItem)
  item?: CoverageEligibilityResponseInsuranceItem[];

  /**
   * Constructor for CoverageEligibilityResponseInsurance
   */
  constructor(source: Partial<CoverageEligibilityResponseInsurance> = {}) {
    super(source);
  }
}
