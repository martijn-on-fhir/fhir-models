import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AccountGuarantor extends BackboneElement {
  /**
   * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
   */
  @IsOptional()
  @IsBoolean()
  onHold?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _onHold?: Element;

  /**
   * The entity who is responsible.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  party?: Reference;

  /**
   * The timeframe during which the guarantor accepts responsibility for the account.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Constructor for AccountGuarantor
   */
  constructor(source: Partial<AccountGuarantor> = {}) {
    super(source);
  }
}
