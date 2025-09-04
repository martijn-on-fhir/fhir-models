import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { ClaimResponseItemDetailSubDetail } from './ClaimResponseItemDetailSubDetail';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponseItemDetail extends BackboneElement implements fhir.ClaimResponseItemDetail {
  /**
   * The adjudication results.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /**
   * A number to uniquely reference the claim detail entry.
   */
  @IsOptional()
  @IsNumber()
  detailSequence?: number;

  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  noteNumber?: number[];

  /**
   * A sub-detail adjudication of a simple product or service.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemDetailSubDetail)
  subDetail?: ClaimResponseItemDetailSubDetail[];

  /**
   * Constructor for ClaimResponseItemDetail
   */
  constructor(source: Partial<ClaimResponseItemDetail> = {}) {
    super(source);
  }
}
