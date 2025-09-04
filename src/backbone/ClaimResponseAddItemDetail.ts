import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ClaimResponseAddItemDetailSubDetail } from './ClaimResponseAddItemDetailSubDetail';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponseAddItemDetail extends BackboneElement implements fhir.ClaimResponseAddItemDetail {
  /**
   * The adjudication results.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /**
   * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
   */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was o
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept[];

  /**
   * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  noteNumber?: number[];

  /**
   * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Pr
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productOrService?: CodeableConcept;

  /**
   * The number of repetitions of a service or product.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * The third-tier service adjudications for payor added services.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseAddItemDetailSubDetail)
  subDetail?: ClaimResponseAddItemDetailSubDetail[];

  /**
   * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /**
   * Constructor for ClaimResponseAddItemDetail
   */
  constructor(source: Partial<ClaimResponseAddItemDetail> = {}) {
    super(source);
  }
}
