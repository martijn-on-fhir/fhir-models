import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import { PaymentReconciliationDetail } from '../backbone/PaymentReconciliationDetail';
import { PaymentReconciliationProcessNote } from '../backbone/PaymentReconciliationProcessNote';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PaymentReconciliation extends DomainResource implements fhir.PaymentReconciliation {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'PaymentReconciliation' as const;

  /**
   * The date when the resource was created.
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * Distribution of the payment amount for a previously acknowledged payable.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PaymentReconciliationDetail)
  detail?: PaymentReconciliationDetail[];

  /**
   * A human readable description of the status of the request for the reconciliation.
   */
  @IsOptional()
  @IsString()
  disposition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _disposition?: Element;

  /**
   * May be needed to identify specific jurisdictional forms.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  formCode?: CodeableConcept;

  /**
   * A unique identifier assigned to this payment reconciliation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed
   */
  @IsOptional()
  @IsIn(['queued', 'complete', 'error', 'partial'])
  outcome?: ('queued'|'complete'|'error'|'partial');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _outcome?: Element;

  /**
   * Total payment amount as indicated on the financial instrument.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  paymentAmount?: Money;

  /**
   * The date of payment as indicated on the financial instrument.
   */
  @IsOptional()
  @IsString()
  paymentDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _paymentDate?: Element;

  /**
   * For example: EFT number or check number.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  paymentIdentifier?: Identifier;

  /**
   * This party is also responsible for the reconciliation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  paymentIssuer?: Reference;

  /**
   * The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * A note that describes or explains the processing in a human readable form.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PaymentReconciliationProcessNote)
  processNote?: PaymentReconciliationProcessNote[];

  /**
   * Original request resource reference.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requestor?: Reference;

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
   * Constructor for PaymentReconciliation
   */
  constructor(source: Partial<PaymentReconciliation> = {}) {
    super(source);
    this.resourceType = 'PaymentReconciliation';
  }
}
