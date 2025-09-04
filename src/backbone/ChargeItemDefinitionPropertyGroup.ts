import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ChargeItemDefinitionApplicability } from './ChargeItemDefinitionApplicability';
import { ChargeItemDefinitionPropertyGroupPriceComponent } from './ChargeItemDefinitionPropertyGroupPriceComponent';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ChargeItemDefinitionPropertyGroup extends BackboneElement implements fhir.ChargeItemDefinitionPropertyGroup {
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChargeItemDefinitionApplicability)
  applicability?: ChargeItemDefinitionApplicability[];

  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChargeItemDefinitionPropertyGroupPriceComponent)
  priceComponent?: ChargeItemDefinitionPropertyGroupPriceComponent[];

  /**
   * Constructor for ChargeItemDefinitionPropertyGroup
   */
  constructor(source: Partial<ChargeItemDefinitionPropertyGroup> = {}) {
    super(source);
  }
}
