import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageCostToBeneficiaryException } from './CoverageCostToBeneficiaryException';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CoverageCostToBeneficiary extends BackboneElement {
  /**
   * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageCostToBeneficiaryException)
  exception?: CoverageCostToBeneficiaryException[];

  /**
   * For example visit, specialist visits, emergency, inpatient care, etc.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  valueMoney?: Money;

  /**
   * Constructor for CoverageCostToBeneficiary
   */
  constructor(source: Partial<CoverageCostToBeneficiary> = {}) {
    super(source);
  }
}
