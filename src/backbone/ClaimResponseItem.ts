import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { ClaimResponseItemDetail } from './ClaimResponseItemDetail';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponseItem extends BackboneElement {
  /**
   * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a si
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /**
   * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemDetail)
  detail?: ClaimResponseItemDetail[];

  /**
   * A number to uniquely reference the claim item entries.
   */
  @IsOptional()
  @IsNumber()
  itemSequence?: number;

  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  noteNumber?: number[];

  /**
   * Constructor for ClaimResponseItem
   */
  constructor(source: Partial<ClaimResponseItem> = {}) {
    super(source);
  }
}
