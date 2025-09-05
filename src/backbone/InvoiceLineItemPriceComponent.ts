import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class InvoiceLineItemPriceComponent extends BackboneElement {
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. Th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts e
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. Th
   */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /**
   * This code identifies the type of the component.
   */
  @IsOptional()
  @IsIn(['base', 'surcharge', 'deduction', 'discount', 'tax', 'informational'])
  type?: ('base'|'surcharge'|'deduction'|'discount'|'tax'|'informational');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for InvoiceLineItemPriceComponent
   */
  constructor(source: Partial<InvoiceLineItemPriceComponent> = {}) {
    super(source);
  }
}
