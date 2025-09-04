import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { InsurancePlanCoverageBenefit } from './InsurancePlanCoverageBenefit';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class InsurancePlanCoverage extends BackboneElement {
  /**
   * Specific benefits under this type of coverage.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanCoverageBenefit)
  benefit?: InsurancePlanCoverageBenefit[];

  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  network?: Reference[];

  /**
   * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; H
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for InsurancePlanCoverage
   */
  constructor(source: Partial<InsurancePlanCoverage> = {}) {
    super(source);
  }
}
