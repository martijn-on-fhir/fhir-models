import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PaymentNotice extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'PaymentNotice' as const;

  /**
   * The amount sent to the payee.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /**
   * The date when this resource was created.
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * A unique identifier assigned to this payment notice.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The party who will receive or has received payment that is the subject of this notification.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  payee?: Reference;

  /**
   * A reference to the payment which is the subject of this notice.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  payment?: Reference;

  /**
   * The date when the above payment action occurred.
   */
  @IsOptional()
  @IsString()
  paymentDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _paymentDate?: Element;

  /**
   * Typically paid: payment sent, cleared: payment received.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  paymentStatus?: CodeableConcept;

  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /**
   * The party who is notified of the payment status.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recipient?: Reference;

  /**
   * Reference of resource for which payment is being made.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /**
   * Reference of response to resource for which payment is being made.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  response?: Reference;

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['active', 'cancelled', 'draft', 'entered-in-error'])
  status?: ('active'|'cancelled'|'draft'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for PaymentNotice
   */
  constructor(source: Partial<PaymentNotice> = {}) {
    super(source);
    this.resourceType = 'PaymentNotice';
  }
}
