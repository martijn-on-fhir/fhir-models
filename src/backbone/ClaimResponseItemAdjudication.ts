import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponseItemAdjudication extends BackboneElement {
  /**
   * For example: amount submitted, eligible amount, co-payment, and benefit payable.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  amount?: Money;

  /**
   * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * For example may indicate that the funds for this benefit type have been exhausted.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reason?: CodeableConcept;

  /**
   * For example: eligible percentage or co-payment percentage.
   */
  @IsOptional()
  @IsNumber()
  value?: number;

  /**
   * Constructor for ClaimResponseItemAdjudication
   */
  constructor(source: Partial<ClaimResponseItemAdjudication> = {}) {
    super(source);
  }
}
