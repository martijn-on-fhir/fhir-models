import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Duration } from '../elements/Duration';
import { MedicationRequestDispenseRequestInitialFill } from './MedicationRequestDispenseRequestInitialFill';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationRequestDispenseRequest extends BackboneElement implements fhir.MedicationRequestDispenseRequest {
  /**
   * The minimum period of time that must occur between dispenses of the medication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  dispenseInterval?: Duration;

  /**
   * In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is exp
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  expectedSupplyDuration?: Duration;

  /**
   * If populating this element, either the quantity or the duration must be included.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationRequestDispenseRequestInitialFill)
  initialFill?: MedicationRequestDispenseRequestInitialFill;

  /**
   * If displaying "number of authorized fills", add 1 to this number.
   */
  @IsOptional()
  @IsNumber()
  numberOfRepeatsAllowed?: number;

  /**
   * Indicates the intended dispensing Organization specified by the prescriber.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /**
   * The amount that is to be dispensed for one fill.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * It reflects the prescribers' perspective for the validity of the prescription. Dispenses must not be made against the pr
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  validityPeriod?: Period;

  /**
   * Constructor for MedicationRequestDispenseRequest
   */
  constructor(source: Partial<MedicationRequestDispenseRequest> = {}) {
    super(source);
  }
}
