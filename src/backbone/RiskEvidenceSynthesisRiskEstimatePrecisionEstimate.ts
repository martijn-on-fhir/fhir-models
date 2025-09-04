import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends BackboneElement {
  /**
   * Lower bound of confidence interval.
   */
  @IsOptional()
  @IsNumber()
  from?: number;

  /**
   * Use 95 for a 95% confidence interval.
   */
  @IsOptional()
  @IsNumber()
  level?: number;

  /**
   * Upper bound of confidence interval.
   */
  @IsOptional()
  @IsNumber()
  to?: number;

  /**
   * Examples include confidence interval and interquartile range.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for RiskEvidenceSynthesisRiskEstimatePrecisionEstimate
   */
  constructor(source: Partial<RiskEvidenceSynthesisRiskEstimatePrecisionEstimate> = {}) {
    super(source);
  }
}
