import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PaymentReconciliationDetail extends BackboneElement {
  /**
   * The monetary amount allocated from the total payment to the payable.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /**
   * The date from the response resource containing a commitment to pay.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * Unique identifier for the current payment item for the referenced payable.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * The party which is receiving the payment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  payee?: Reference;

  /**
   * Unique identifier for the prior payment item for the referenced payable.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  predecessor?: Identifier;

  /**
   * A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /**
   * A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  response?: Reference;

  /**
   * A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  responsible?: Reference;

  /**
   * The party which submitted the claim or financial transaction.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  submitter?: Reference;

  /**
   * For example: payment, adjustment, funds advance, etc.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for PaymentReconciliationDetail
   */
  constructor(source: Partial<PaymentReconciliationDetail> = {}) {
    super(source);
  }
}
