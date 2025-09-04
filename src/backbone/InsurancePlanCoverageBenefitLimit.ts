import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class InsurancePlanCoverageBenefitLimit extends BackboneElement {
  /**
   * Use `CodeableConcept.text` element if the data is free (uncoded) text.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  value?: Quantity;

  /**
   * Constructor for InsurancePlanCoverageBenefitLimit
   */
  constructor(source: Partial<InsurancePlanCoverageBenefitLimit> = {}) {
    super(source);
  }
}
