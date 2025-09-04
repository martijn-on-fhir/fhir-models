import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Duration } from '../elements/Duration';
import { Quantity } from '../elements/Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationRequestDispenseRequestInitialFill extends BackboneElement {
  /**
   * The length of time that the first dispense is expected to last.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  duration?: Duration;

  /**
   * The amount or quantity to provide as part of the first dispense.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Constructor for MedicationRequestDispenseRequestInitialFill
   */
  constructor(source: Partial<MedicationRequestDispenseRequestInitialFill> = {}) {
    super(source);
  }
}
