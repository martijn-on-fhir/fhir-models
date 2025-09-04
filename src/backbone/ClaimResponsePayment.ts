import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponsePayment extends BackboneElement implements fhir.ClaimResponsePayment {
  /**
   * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  adjustment?: Money;

  /**
   * Reason for the payment adjustment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  adjustmentReason?: CodeableConcept;

  /**
   * Benefits payable less any payment adjustment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /**
   * Estimated date the payment will be issued or the actual issue date of payment.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * For example: EFT number or check number.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * Whether this represents partial or complete payment of the benefits payable.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for ClaimResponsePayment
   */
  constructor(source: Partial<ClaimResponsePayment> = {}) {
    super(source);
  }
}
