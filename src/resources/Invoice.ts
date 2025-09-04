import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { InvoiceLineItem } from '../backbone/InvoiceLineItem';
import { InvoiceLineItemPriceComponent } from '../backbone/InvoiceLineItemPriceComponent';
import { InvoiceParticipant } from '../backbone/InvoiceParticipant';
import { Money } from '../elements/Money';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Invoice extends DomainResource implements fhir.Invoice {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Invoice' as const;

  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  account?: Reference;

  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOver
   */
  @IsOptional()
  @IsString()
  cancelledReason?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _cancelledReason?: Element;

  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Org
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  issuer?: Reference;

  /**
   * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceLineItem)
  lineItem?: InvoiceLineItem[];

  /**
   * Comments made about the invoice by the issuer, subject, or other participants.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Indicates who or what performed or participated in the charged service.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceParticipant)
  participant?: InvoiceParticipant[];

  /**
   * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverr
   */
  @IsOptional()
  @IsString()
  paymentTerms?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _paymentTerms?: Element;

  /**
   * The individual or Organization responsible for balancing of this invoice.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recipient?: Reference;

  /**
   * The current state of the Invoice.
   */
  @IsOptional()
  @IsIn(['draft', 'issued', 'balanced', 'cancelled', 'entered-in-error'])
  status?: ('draft'|'issued'|'balanced'|'cancelled'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The individual or set of individuals receiving the goods and services billed in this invoice.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. Th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  totalGross?: Money;

  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. Th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  totalNet?: Money;

  /**
   * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceLineItemPriceComponent)
  totalPriceComponent?: InvoiceLineItemPriceComponent[];

  /**
   * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for Invoice
   */
  constructor(source: Partial<Invoice> = {}) {
    super(source);
    this.resourceType = 'Invoice';
  }
}
