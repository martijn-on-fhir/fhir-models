import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { InvoiceLineItemPriceComponent } from './InvoiceLineItemPriceComponent';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class InvoiceLineItem extends BackboneElement {
  /**
   * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  chargeItemReference?: Reference;

  /**
   * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  chargeItemCodeableConcept?: CodeableConcept;

  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceLineItemPriceComponent)
  priceComponent?: InvoiceLineItemPriceComponent[];

  /**
   * Sequence in which the items appear on the invoice.
   */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /**
   * Constructor for InvoiceLineItem
   */
  constructor(source: Partial<InvoiceLineItem> = {}) {
    super(source);
  }
}
