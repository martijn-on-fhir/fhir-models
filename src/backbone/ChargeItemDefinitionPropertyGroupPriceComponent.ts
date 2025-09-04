import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ChargeItemDefinitionPropertyGroupPriceComponent extends BackboneElement implements fhir.ChargeItemDefinitionPropertyGroupPriceComponent {
  /**
   * The amount calculated for this component.
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
   * The factor that has been applied on the base price for calculating this component.
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
   * Constructor for ChargeItemDefinitionPropertyGroupPriceComponent
   */
  constructor(source: Partial<ChargeItemDefinitionPropertyGroupPriceComponent> = {}) {
    super(source);
  }
}
