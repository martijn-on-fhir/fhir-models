import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AccountCoverage extends BackboneElement implements fhir.AccountCoverage {
  /**
   * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay). A cove
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /**
   * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is require
   */
  @IsOptional()
  @IsNumber()
  priority?: number;

  /**
   * Constructor for AccountCoverage
   */
  constructor(source: Partial<AccountCoverage> = {}) {
    super(source);
  }
}
