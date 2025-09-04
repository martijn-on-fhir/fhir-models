import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponseItemDetailSubDetail extends BackboneElement {
  /**
   * The adjudication results.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  noteNumber?: number[];

  /**
   * A number to uniquely reference the claim sub-detail entry.
   */
  @IsOptional()
  @IsNumber()
  subDetailSequence?: number;

  /**
   * Constructor for ClaimResponseItemDetailSubDetail
   */
  constructor(source: Partial<ClaimResponseItemDetailSubDetail> = {}) {
    super(source);
  }
}
